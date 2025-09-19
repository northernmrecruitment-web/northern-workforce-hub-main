import { Button } from "@/components/ui/button";
import { Heart, Shield, Fish, Boxes, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import casualFarmWorkers from "@/assets/hero-casual-farm-workers.jpg";
import nursingCareWorkers from "@/assets/hero-nursing-care-workers.jpg";
import fishProcessing from "@/assets/hero-fish-processing.jpg";
import warehouseFactory from "@/assets/hero-warehouse-factory.jpg";

const Hero = () => {
  const industrySlides = [
    {
      src: casualFarmWorkers,
      alt: "Professional casual farm workers and agricultural laborers working together in bright green fields",
      title: "Recruiting with Care & Commitment",
      subtitle: "Connecting skilled agricultural workers to UK farms nationwide",
      ctaText: "Find Farm Work",
      ctaLink: "/jobs",
      icon: Shield
    },
    {
      src: nursingCareWorkers,
      alt: "Professional nursing and care workers in bright modern healthcare facility",
      title: "Compassionate Care Professionals",
      subtitle: "Connecting skilled carers to families and facilities in need",
      ctaText: "Find Care Work",
      ctaLink: "/jobs",
      icon: Heart
    },
    {
      src: fishProcessing,
      alt: "Professional fish processing and fish farming workers in modern facility",
      title: "Sustainable Seafood Careers",
      subtitle: "Joining the future of responsible fish farming and processing",
      ctaText: "Find Fishery Work",
      ctaLink: "/jobs",
      icon: Fish
    },
    {
      src: warehouseFactory,
      alt: "Professional warehouse and factory workers in modern industrial facility",
      title: "Industrial Excellence",
      subtitle: "Building careers in modern manufacturing and logistics",
      ctaText: "Find Factory Work",
      ctaLink: "/jobs",
      icon: Boxes
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {industrySlides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <CarouselItem key={index}>
                <div className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
                  {/* Background Image */}
                  <img 
                    src={slide.src} 
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
                    <div className="container mx-auto px-4 lg:px-6 text-center text-white">
                      <div className="max-w-4xl mx-auto">
                        {/* Industry Icon */}
                        <div className="flex justify-center mb-6">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <IconComponent className="w-12 h-12 text-white" />
                          </div>
                        </div>
                        
                        {/* Main Headline */}
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 drop-shadow-lg">
                          {slide.title}
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-xl lg:text-2xl xl:text-3xl mb-8 opacity-90 drop-shadow-md">
                          {slide.subtitle}
                        </p>
                        
                        {/* Call-to-Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                          <Button 
                            asChild
                            size="lg" 
                            className="btn-primary text-lg font-semibold py-4 px-8 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all"
                          >
                            <a href={slide.ctaLink}>
                              {slide.ctaText}
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-foreground backdrop-blur-sm text-lg font-semibold py-4 px-8"
                          >
                            Hire Talent
                          </Button>
                        </div>
                        
                        {/* Statistics */}
                        <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                          <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold mb-2 drop-shadow-md">500+</div>
                            <div className="text-sm opacity-90">Workers Placed</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold mb-2 drop-shadow-md">100+</div>
                            <div className="text-sm opacity-90">Partner Companies</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold mb-2 drop-shadow-md">£13+</div>
                            <div className="text-sm opacity-90">Average Hourly</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </section>
  );
};

export default Hero;