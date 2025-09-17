export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  region: string;
  county: string;
  shiftType: string;
  rate: {
    min: number;
    max: number;
    period: 'hour' | 'day' | 'week';
  };
  sector: string;
  category: string;
  startDate: string;
  endDate?: string;
  description: string;
  requirements: string[];
  benefits: string[];
  accommodation?: {
    provided: boolean;
    type?: string;
    cost?: string;
  };
  transport?: {
    provided: boolean;
    details?: string;
  };
  urgent: boolean;
  featured: boolean;
  contactEmail: string;
  contactPhone?: string;
  postedDate: string;
  applicationDeadline?: string;
  experienceLevel: 'No experience' | 'Some experience' | 'Experienced';
  visaSponsorship: boolean;
  workPermitRequired: boolean;
  languages?: string[];
}

export interface JobFilters {
  search?: string;
  location?: string;
  sector?: string[];
  shiftType?: string[];
  experienceLevel?: string[];
  minRate?: number;
  maxRate?: number;
  accommodation?: boolean;
  transport?: boolean;
  visaSponsorship?: boolean;
  urgent?: boolean;
  featured?: boolean;
}

export interface JobSortOption {
  label: string;
  value: string;
  field: keyof Job | 'relevance';
  direction: 'asc' | 'desc';
}