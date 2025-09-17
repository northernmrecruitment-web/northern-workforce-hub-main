import { Job } from '@/types/job';

export const jobsData: Job[] = [
  {
    id: 'agr-001',
    title: 'Fruit Picker - Apple & Pear Harvest',
    company: 'Yorkshire Orchards Ltd',
    location: 'Malton, North Yorkshire',
    region: 'Yorkshire and the Humber',
    county: 'North Yorkshire',
    shiftType: 'Seasonal Full-time',
    rate: { min: 12, max: 15, period: 'hour' },
    sector: 'Agriculture',
    category: 'Fruit Picking',
    startDate: 'Immediate',
    endDate: 'November 2024',
    description: 'Join our experienced team for apple and pear harvest season. We provide full training and welcome workers from all backgrounds. Work in beautiful orchards with a friendly international team.',
    requirements: [
      'Ability to work outdoors in all weather conditions',
      'Physical fitness for standing and lifting',
      'Reliable attendance',
      'Basic English communication'
    ],
    benefits: [
      'Weekly pay',
      'Overtime opportunities',
      'Free training provided',
      'International team environment',
      'Piece rate bonuses available'
    ],
    accommodation: {
      provided: true,
      type: 'Shared house accommodation',
      cost: '£80/week including utilities'
    },
    transport: {
      provided: true,
      details: 'Daily transport to orchards provided'
    },
    urgent: true,
    featured: true,
    contactEmail: 'jobs@yorkshireorchards.co.uk',
    contactPhone: '01653 123456',
    postedDate: '2024-09-10',
    applicationDeadline: '2024-09-25',
    experienceLevel: 'No experience',
    visaSponsorship: true,
    workPermitRequired: true,
    languages: ['English', 'Romanian', 'Polish']
  },
  {
    id: 'agr-002',
    title: 'Greenhouse Vegetable Worker',
    company: 'Lincolnshire Growers Co-op',
    location: 'Boston, Lincolnshire',
    region: 'East Midlands',
    county: 'Lincolnshire',
    shiftType: 'Day Shift',
    rate: { min: 11, max: 14, period: 'hour' },
    sector: 'Agriculture',
    category: 'Greenhouse Work',
    startDate: 'Next Week',
    endDate: 'March 2025',
    description: 'Work in modern climate-controlled greenhouses growing tomatoes, cucumbers, and peppers. Perfect for workers who prefer indoor agricultural work.',
    requirements: [
      'Attention to detail',
      'Ability to work in warm conditions',
      'Basic plant care knowledge helpful but not essential'
    ],
    benefits: [
      'Climate-controlled working environment',
      'Regular hours',
      'Skills development opportunities',
      'Employee of the month bonuses'
    ],
    accommodation: {
      provided: true,
      type: 'Purpose-built worker accommodation',
      cost: '£90/week'
    },
    transport: {
      provided: false,
      details: 'Good bus links available'
    },
    urgent: false,
    featured: true,
    contactEmail: 'recruitment@lincolnshiregrowers.co.uk',
    postedDate: '2024-09-12',
    experienceLevel: 'Some experience',
    visaSponsorship: true,
    workPermitRequired: true
  },
  {
    id: 'agr-003',
    title: 'Dairy Farm Assistant',
    company: 'Peak District Dairy Farm',
    location: 'Buxton, Derbyshire',
    region: 'East Midlands',
    county: 'Derbyshire',
    shiftType: 'Early Morning',
    rate: { min: 13, max: 16, period: 'hour' },
    sector: 'Agriculture',
    category: 'Livestock',
    startDate: 'Immediate',
    description: 'Help with daily milking operations and general farm duties. Perfect role for those who enjoy working with animals and want to learn dairy farming skills.',
    requirements: [
      'Early morning availability (5am start)',
      'Comfortable working with large animals',
      'Physical fitness',
      'Reliable and punctual'
    ],
    benefits: [
      'Learn valuable dairy farming skills',
      'Beautiful countryside location',
      'Potential for permanent employment',
      'Free fresh milk and dairy products'
    ],
    accommodation: {
      provided: true,
      type: 'Farm cottage',
      cost: '£75/week'
    },
    transport: {
      provided: false,
      details: 'Own transport preferred due to rural location'
    },
    urgent: true,
    featured: false,
    contactEmail: 'farmjobs@peakdairy.co.uk',
    contactPhone: '01298 765432',
    postedDate: '2024-09-14',
    experienceLevel: 'No experience',
    visaSponsorship: false,
    workPermitRequired: true
  },
  {
    id: 'agr-004',
    title: 'Tractor Operator',
    company: 'East Anglian Arable Farms',
    location: 'Norwich, Norfolk',
    region: 'East of England',
    county: 'Norfolk',
    shiftType: 'Full-time',
    rate: { min: 15, max: 18, period: 'hour' },
    sector: 'Agriculture',
    category: 'Machinery Operation',
    startDate: 'October 1st',
    description: 'Experienced tractor operator needed for autumn cultivation and spring sowing operations. Must have valid driving license and tractor operation experience.',
    requirements: [
      'Valid UK driving license',
      'Tractor operation experience',
      'Knowledge of agricultural machinery',
      'Flexible working hours'
    ],
    benefits: [
      'Competitive rates',
      'Modern machinery',
      'Varied work throughout seasons',
      'Skills development opportunities'
    ],
    accommodation: {
      provided: false
    },
    transport: {
      provided: false
    },
    urgent: false,
    featured: true,
    contactEmail: 'operations@eaarable.co.uk',
    postedDate: '2024-09-11',
    experienceLevel: 'Experienced',
    visaSponsorship: false,
    workPermitRequired: true
  },
  {
    id: 'agr-005',
    title: 'Potato Harvest Worker',
    company: 'Scottish Highlands Potatoes',
    location: 'Inverness, Highland',
    region: 'Scotland',
    county: 'Highland',
    shiftType: 'Seasonal',
    rate: { min: 12, max: 14, period: 'hour' },
    sector: 'Agriculture',
    category: 'Crop Harvesting',
    startDate: 'September 25th',
    endDate: 'December 15th',
    description: 'Join our harvest team for potato lifting season in the beautiful Scottish Highlands. Hard work but great team atmosphere and stunning scenery.',
    requirements: [
      'Physical fitness for outdoor work',
      'Ability to work in cold conditions',
      'Team working skills',
      'Commitment to full season'
    ],
    benefits: [
      'Beautiful Highland location',
      'Excellent team atmosphere',
      'Seasonal completion bonus',
      'Cultural exchange opportunities'
    ],
    accommodation: {
      provided: true,
      type: 'Shared worker accommodation',
      cost: '£85/week'
    },
    transport: {
      provided: true,
      details: 'Daily transport to fields'
    },
    urgent: true,
    featured: false,
    contactEmail: 'harvest@highlandpotatoes.co.uk',
    postedDate: '2024-09-13',
    experienceLevel: 'No experience',
    visaSponsorship: true,
    workPermitRequired: true
  },
  {
    id: 'agr-006',
    title: 'Mushroom Farm Operative',
    company: 'Midlands Mushroom Company',
    location: 'Birmingham, West Midlands',
    region: 'West Midlands',
    county: 'West Midlands',
    shiftType: 'Rotating Shifts',
    rate: { min: 11, max: 13, period: 'hour' },
    sector: 'Agriculture',
    category: 'Indoor Farming',
    startDate: 'Immediate',
    description: 'Work in our state-of-the-art mushroom growing facility. Climate-controlled environment with year-round work opportunities.',
    requirements: [
      'Attention to hygiene standards',
      'Ability to work in humid conditions',
      'Flexibility for different shifts'
    ],
    benefits: [
      'Year-round employment',
      'Indoor work environment',
      'Health and safety training',
      'Career progression opportunities'
    ],
    accommodation: {
      provided: false
    },
    transport: {
      provided: false,
      details: 'Excellent public transport links'
    },
    urgent: false,
    featured: false,
    contactEmail: 'careers@midlandsmushrooms.co.uk',
    postedDate: '2024-09-09',
    experienceLevel: 'No experience',
    visaSponsorship: true,
    workPermitRequired: true
  }
];

export const getJobs = (filters?: Partial<{ 
  search: string; 
  location: string; 
  sector: string[]; 
  urgent: boolean;
  featured: boolean;
}>) => {
  let filteredJobs = [...jobsData];

  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm) ||
      job.description.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.category.toLowerCase().includes(searchTerm)
    );
  }

  if (filters?.location) {
    const locationTerm = filters.location.toLowerCase();
    filteredJobs = filteredJobs.filter(job => 
      job.location.toLowerCase().includes(locationTerm) ||
      job.county.toLowerCase().includes(locationTerm) ||
      job.region.toLowerCase().includes(locationTerm)
    );
  }

  if (filters?.sector && filters.sector.length > 0) {
    filteredJobs = filteredJobs.filter(job => 
      filters.sector!.includes(job.sector)
    );
  }

  if (filters?.urgent) {
    filteredJobs = filteredJobs.filter(job => job.urgent);
  }

  if (filters?.featured) {
    filteredJobs = filteredJobs.filter(job => job.featured);
  }

  return filteredJobs;
};