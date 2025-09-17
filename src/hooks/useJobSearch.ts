import { useState, useMemo, useCallback } from 'react';
import { Job, JobFilters } from '@/types/job';
import { getJobs } from '@/data/jobs';

export interface SearchParams {
  searchTerm?: string;
  location?: string;
  jobType?: string;
  sector?: string[];
}

export const useJobSearch = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});
  const [filters, setFilters] = useState<JobFilters>({});
  const [sortBy, setSortBy] = useState<string>('featured');

  const allJobs = useMemo(() => getJobs(), []);

  const filteredJobs = useMemo(() => {
    let jobs = [...allJobs];

    // Apply search parameters
    if (searchParams.searchTerm) {
      const searchTerm = searchParams.searchTerm.toLowerCase();
      jobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.requirements.some(req => req.toLowerCase().includes(searchTerm))
      );
    }

    if (searchParams.location) {
      const location = searchParams.location.toLowerCase();
      jobs = jobs.filter(job => 
        job.location.toLowerCase().includes(location) ||
        job.region.toLowerCase().includes(location) ||
        job.county.toLowerCase().includes(location)
      );
    }

    if (searchParams.jobType && searchParams.jobType !== 'all') {
      jobs = jobs.filter(job => 
        job.shiftType.toLowerCase().includes(searchParams.jobType!.toLowerCase())
      );
    }

    // Apply additional filters
    if (filters.sector && filters.sector.length > 0) {
      jobs = jobs.filter(job => filters.sector!.includes(job.sector));
    }

    if (filters.urgent) {
      jobs = jobs.filter(job => job.urgent);
    }

    if (filters.featured) {
      jobs = jobs.filter(job => job.featured);
    }

    if (filters.accommodation) {
      jobs = jobs.filter(job => job.accommodation?.provided);
    }

    if (filters.transport) {
      jobs = jobs.filter(job => job.transport?.provided);
    }

    if (filters.visaSponsorship) {
      jobs = jobs.filter(job => job.visaSponsorship);
    }

    if (filters.experienceLevel && filters.experienceLevel.length > 0) {
      jobs = jobs.filter(job => filters.experienceLevel!.includes(job.experienceLevel));
    }

    if (filters.minRate) {
      jobs = jobs.filter(job => job.rate.min >= filters.minRate!);
    }

    if (filters.maxRate) {
      jobs = jobs.filter(job => job.rate.max <= filters.maxRate!);
    }

    // Apply sorting
    switch (sortBy) {
      case 'featured':
        jobs.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.urgent && !b.urgent) return -1;
          if (!a.urgent && b.urgent) return 1;
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        });
        break;
      case 'newest':
        jobs.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
        break;
      case 'rate-high':
        jobs.sort((a, b) => b.rate.max - a.rate.max);
        break;
      case 'rate-low':
        jobs.sort((a, b) => a.rate.min - b.rate.min);
        break;
      case 'relevance':
        // For relevance, prioritize exact matches in title, then company, then description
        if (searchParams.searchTerm) {
          const searchTerm = searchParams.searchTerm.toLowerCase();
          jobs.sort((a, b) => {
            const aScore = getRelevanceScore(a, searchTerm);
            const bScore = getRelevanceScore(b, searchTerm);
            return bScore - aScore;
          });
        }
        break;
      default:
        break;
    }

    return jobs;
  }, [allJobs, searchParams, filters, sortBy]);

  const getRelevanceScore = (job: Job, searchTerm: string): number => {
    let score = 0;
    const titleMatch = job.title.toLowerCase().includes(searchTerm);
    const companyMatch = job.company.toLowerCase().includes(searchTerm);
    const descriptionMatch = job.description.toLowerCase().includes(searchTerm);
    
    if (titleMatch) score += 10;
    if (companyMatch) score += 5;
    if (descriptionMatch) score += 2;
    if (job.featured) score += 3;
    if (job.urgent) score += 1;
    
    return score;
  };

  const updateSearchParams = useCallback((params: Partial<SearchParams>) => {
    setSearchParams(prev => ({ ...prev, ...params }));
  }, []);

  const updateFilters = useCallback((newFilters: Partial<JobFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearchParams({});
    setFilters({});
    setSortBy('featured');
  }, []);

  const searchByCategory = useCallback((category: string) => {
    const categoryMappings: Record<string, Partial<SearchParams>> = {
      'fruit-picking': { searchTerm: 'fruit picking', sector: ['Agriculture'] },
      'tractor-operations': { searchTerm: 'tractor', sector: ['Agriculture'] },
      'greenhouse-work': { searchTerm: 'greenhouse', sector: ['Agriculture'] },
      'livestock-care': { searchTerm: 'livestock', sector: ['Agriculture'] },
      'crop-harvesting': { searchTerm: 'harvest', sector: ['Agriculture'] }
    };

    const params = categoryMappings[category];
    if (params) {
      setSearchParams(params);
      if (params.sector) {
        setFilters(prev => ({ ...prev, sector: params.sector }));
      }
    }
  }, []);

  return {
    searchParams,
    filters,
    sortBy,
    jobs: filteredJobs,
    totalJobs: allJobs.length,
    filteredCount: filteredJobs.length,
    updateSearchParams,
    updateFilters,
    setSortBy,
    clearAllFilters,
    searchByCategory
  };
};