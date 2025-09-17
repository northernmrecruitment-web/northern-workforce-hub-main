import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import diverseHarvestTeam from "@/assets/diverse-harvest-team.jpg";
import diverseEquipmentTeam from "@/assets/diverse-equipment-team.jpg";
import diverseGreenhouseWorkers from "@/assets/diverse-greenhouse-workers.jpg";
import diverseOrchardWorkers from "@/assets/diverse-orchard-workers.jpg";
import diverseFarmMeeting from "@/assets/diverse-farm-meeting.jpg";

const Hero = () => {
  const farmImages = [
    {
      src: diverseHarvestTeam,
      alt: "Diverse team of farm workers from Africa, Asia, and Europe harvesting crops in UK fields",
      caption: "Seasonal Harvest Workers"
    },
    {
      src: diverseEquipmentTeam,
      alt: "Multi-ethnic agricultural team operating farm machinery and tractors in British countryside",
      caption: "Equipment Operators"
    },
    {
      src: diverseGreenhouseWorkers,
      alt: "Diverse greenhouse workers from various backgrounds tending crops in UK polytunnels",
      caption: "Greenhouse Specialists"
    },
    {
      src: diverseOrchardWorkers,
      alt: "Multi-ethnic orchard workers picking fruit in UK apple and pear orchards",
      caption: "Orchard Workers"
    },
    {
      src: diverseFarmMeeting,
      alt: "Diverse agricultural team meeting including African, Asian and European farm supervisors",
      caption: "Farm Supervisors"
    }
  ];

  return (
    <section className="bg-gradient-hero border-b border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        {/* Optimized two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Agricultural Specialists Since 2016
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground mb-6">
              Agricultural Workers
              <span className="block text-secondary mt-2">Seasonal. Reliable. Ready.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Connecting experienced agricultural workers with UK farm employers across Britain.
            </p>

            {/* Perfectly aligned statistics */}
            <div className="flex justify-center lg:justify-start gap-12 mb-10">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Workers Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Partner Farms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">£12+</div>
                <div className="text-sm text-muted-foreground">Hourly Rate</div>
              </div>
            </div>

            {/* Professional CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="default" size="lg" className="sm:min-w-[200px] bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white font-semibold">
                Apply for Farm Work
              </Button>
              <Button variant="outline" size="lg" className="sm:min-w-[200px] border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                Hire Farm Workers
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image Carousel */}
          <div className="relative">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {farmImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-2xl shadow-hover">
                       <img 
                         src={image.src} 
                         alt={image.alt}
                         className="w-full h-[400px] lg:h-[480px] object-cover"
                       />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                      
                      {/* Image Caption */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-card/90 backdrop-blur-sm border border-border text-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-md">
                          {image.caption}
                        </div>
                      </div>
                      
                      {/* Floating badges */}
                      {index === 0 && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Weekly Pay
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            No Experience? We'll train you
                          </div>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            {/* Floating trust badges */}
            <div className="absolute -bottom-6 left-6 right-6">
              <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="font-medium">Trusted by:</span>
                  <span>Yorkshire Farms</span>
                  <span>British AgriCorp</span>
                  <span>UK Harvest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;