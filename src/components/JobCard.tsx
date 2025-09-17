import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Calendar, DollarSign, Star, Home, Bus } from "lucide-react";
import { Job } from "@/types/job";
import { useNavigate } from "react-router-dom";

interface JobCardProps extends Job {}

const JobCard = ({ 
  id,
  title, 
  company,
  location, 
  shiftType, 
  rate, 
  sector, 
  startDate, 
  description,
  urgent = false,
  featured = false,
  accommodation,
  transport,
  experienceLevel,
  visaSponsorship
}: JobCardProps) => {
  const navigate = useNavigate();
  const getSectorIcon = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'healthcare': return '🏥';
      case 'agriculture': return '🌾';
      case 'manufacturing': return '🏭';
      case 'care': return '👥';
      default: return '💼';
    }
  };

  const formatRate = (rate: { min: number; max: number; period: string }) => {
    return `£${rate.min}-${rate.max}/${rate.period}`;
  };

  return (
    <div className={`card-elevated rounded-xl p-6 hover:scale-[1.02] transform transition-all duration-300 ${featured ? 'ring-2 ring-secondary/20' : ''}`}>
      {/* Header with badges */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{getSectorIcon(sector)}</span>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading font-semibold text-lg text-foreground line-clamp-1">
                {title}
              </h3>
              {featured && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-1">{company}</p>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          {urgent && (
            <Badge variant="destructive" className="text-xs">
              Urgent
            </Badge>
          )}
          {featured && (
            <Badge variant="default" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
      </div>

      {/* Job Details Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{shiftType}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium text-foreground">{formatRate(rate)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{startDate}</span>
        </div>
        <div>
          <Badge variant="secondary" className="text-xs">
            {experienceLevel}
          </Badge>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="flex gap-2 mb-4">
        {accommodation?.provided && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            <Home className="w-3 h-3" />
            <span>Housing</span>
          </div>
        )}
        {transport?.provided && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            <Bus className="w-3 h-3" />
            <span>Transport</span>
          </div>
        )}
        {visaSponsorship && (
          <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            Visa Help
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
        {description}
      </p>

      {/* Actions */}
      <div className="flex gap-3">
        <Button 
          variant="default" 
          size="default" 
          className="flex-1"
          onClick={() => navigate(`/jobs/${id}`)}
        >
          View Details
        </Button>
        <Button 
          variant="outline" 
          size="default"
          onClick={(e) => {
            e.stopPropagation();
            // Save job functionality - could store in localStorage for now
            const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
            if (!savedJobs.includes(id)) {
              savedJobs.push(id);
              localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
            }
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default JobCard;