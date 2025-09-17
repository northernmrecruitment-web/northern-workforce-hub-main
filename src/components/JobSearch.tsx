import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar, Briefcase, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useJobSearch } from "@/hooks/useJobSearch";

interface JobSearchProps {
  onSearchUpdate?: (params: {searchTerm?: string; location?: string; jobType?: string}) => void;
}

const JobSearch = ({ onSearchUpdate }: JobSearchProps) => {
  const { updateSearchParams, searchByCategory } = useJobSearch();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("all");

  const handleSearch = () => {
    const params = {
      searchTerm: searchTerm || undefined,
      location: location || undefined,
      jobType: jobType === "all" ? undefined : jobType
    };
    
    updateSearchParams(params);
    onSearchUpdate?.(params);
  };

  const handleCategoryClick = (category: string) => {
    searchByCategory(category);
  };

  return (
    <section className="bg-card border border-border rounded-2xl shadow-card p-8 lg:p-10 mx-4 lg:mx-6 -mt-8 relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Find Your Next Agricultural Job
        </h2>
        <p className="text-muted-foreground">
          Search hundreds of agricultural opportunities across the UK with competitive rates and benefits
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span>£11-18/hour average</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>UK-wide positions</span>
          </div>
        </div>
      </div>

      {/* Perfectly aligned search form grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Keywords */}
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="e.g. Fruit picker, Greenhouse worker, Tractor operator"
            className="pl-10 h-12 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="e.g. Yorkshire, Norfolk, Scotland"
            className="pl-10 h-12 text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Job Type */}
        <div>
          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger className="h-12 text-base">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Job Type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Job Types</SelectItem>
              <SelectItem value="seasonal">Seasonal Work</SelectItem>
              <SelectItem value="day-shift">Day Shift</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="rotating">Rotating Shifts</SelectItem>
              <SelectItem value="early-morning">Early Morning</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div>
          <Button variant="default" size="lg" className="w-full h-12" onClick={handleSearch}>
            <Search className="w-4 h-4 mr-2" />
            Search Jobs
          </Button>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">Popular categories:</p>
        <div className="flex flex-wrap gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full hover:bg-secondary hover:text-white"
            onClick={() => handleCategoryClick('fruit-picking')}
          >
            <span className="mr-2">🍎</span>
            Fruit Picking
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full hover:bg-secondary hover:text-white"
            onClick={() => handleCategoryClick('tractor-operations')}
          >
            <span className="mr-2">🚜</span>
            Tractor Operations
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full hover:bg-secondary hover:text-white"
            onClick={() => handleCategoryClick('greenhouse-work')}
          >
            <span className="mr-2">🌱</span>
            Greenhouse Work
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full hover:bg-secondary hover:text-white"
            onClick={() => handleCategoryClick('livestock-care')}
          >
            <span className="mr-2">🐄</span>
            Livestock Care
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full hover:bg-secondary hover:text-white"
            onClick={() => handleCategoryClick('crop-harvesting')}
          >
            <span className="mr-2">🥔</span>
            Crop Harvesting
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;