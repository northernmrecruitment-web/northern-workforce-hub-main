import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Filter, SortAsc, MapPin, Clock } from "lucide-react";
import { useJobSearch } from "@/hooks/useJobSearch";

const JobGrid = () => {
  const { 
    jobs, 
    filters, 
    sortBy, 
    updateFilters, 
    setSortBy, 
    clearAllFilters,
    filteredCount 
  } = useJobSearch();
  
  const [showFilters, setShowFilters] = useState(false);

  const toggleSectorFilter = (sector: string) => {
    const currentSectors = filters.sector || [];
    const newSectors = currentSectors.includes(sector) 
      ? currentSectors.filter(s => s !== sector)
      : [...currentSectors, sector];
    
    updateFilters({ sector: newSectors });
  };

  const activeFiltersCount = (filters.sector?.length || 0) + 
    (filters.urgent ? 1 : 0) + 
    (filters.featured ? 1 : 0) +
    (filters.accommodation ? 1 : 0) +
    (filters.transport ? 1 : 0) +
    (filters.visaSponsorship ? 1 : 0);

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Latest Job Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your perfect role across agricultural sectors throughout the UK
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
            {/* Results count and filters toggle */}
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredCount}</span> jobs found
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="relative"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 text-xs rounded-full">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Sort options */}
            <div className="flex items-center gap-3">
              <SortAsc className="w-4 h-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rate-high">Highest Rate</SelectItem>
                    <SelectItem value="rate-low">Lowest Rate</SelectItem>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                  </SelectContent>
              </Select>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sector Filters */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Sector</h4>
                  <div className="space-y-2">
                    {['Agriculture', 'Healthcare', 'Manufacturing', 'Care'].map(sector => (
                      <label key={sector} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.sector?.includes(sector) || false}
                          onChange={() => toggleSectorFilter(sector)}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{sector}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Quick Filters */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Quick Filters</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.urgent || false}
                        onChange={(e) => updateFilters({ urgent: e.target.checked })}
                        className="rounded border-border"
                      />
                      <span className="text-sm">Urgent Jobs Only</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.featured || false}
                        onChange={(e) => updateFilters({ featured: e.target.checked })}
                        className="rounded border-border"
                      />
                      <span className="text-sm">Featured Jobs Only</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.accommodation || false}
                        onChange={(e) => updateFilters({ accommodation: e.target.checked })}
                        className="rounded border-border"
                      />
                      <span className="text-sm">With Accommodation</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.transport || false}
                        onChange={(e) => updateFilters({ transport: e.target.checked })}
                        className="rounded border-border"
                      />
                      <span className="text-sm">With Transport</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.visaSponsorship || false}
                        onChange={(e) => updateFilters({ visaSponsorship: e.target.checked })}
                        className="rounded border-border"
                      />
                      <span className="text-sm">Visa Sponsorship</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <Button variant="outline" size="sm" onClick={clearAllFilters}>
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Balanced jobs grid */}
        {jobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {jobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <MapPin className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No jobs found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters or search criteria.</p>
            <Button variant="outline" onClick={clearAllFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* View All Jobs CTA */}
        {jobs.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View All Jobs ({jobs.length})
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobGrid;