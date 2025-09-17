import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase, 
  Shield, 
  Award, 
  Clock, 
  MapPin,
  Phone,
  Heart,
  CheckCircle,
  Star,
  TrendingUp,
  Globe
} from "lucide-react";

const About = () => {
  const workerServices = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Job Placement",
      description: "We match you with the right agricultural roles based on your skills and preferences."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Work Permit Support",
      description: "Complete assistance with visa applications and work permit requirements for the UK."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Accommodation",
      description: "Safe, comfortable housing arrangements near your workplace with fair pricing."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Weekly Pay",
      description: "Reliable weekly payments with transparent rate structures and overtime opportunities."
    }
  ];

  const employerServices = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Workforce",
      description: "Access to pre-screened, experienced agricultural workers ready to start immediately."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Compliance Support",
      description: "We handle all employment compliance, ensuring your business meets UK regulations."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support for both urgent staffing needs and ongoing operations."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Retention Programs",
      description: "Worker welfare programs that improve retention and productivity on your farm and business."
    }
  ];

  const achievements = [
    { number: "200+", label: "Workers Placed", icon: <Users className="w-5 h-5" /> },
    { number: "50+", label: "Partner Farms", icon: <MapPin className="w-5 h-5" /> },
    { number: "8", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { number: "95%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Centered header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            Connecting Workers & Employers Since 2016
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
            About Northern Manpower
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are the UK's leading agricultural recruitment specialists, connecting experienced workers 
            from around the world with British farms that need reliable, skilled labor.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2016, Northern Manpower emerged from a simple observation: British farms needed 
                reliable workers, while skilled agricultural workers from Africa, Asia, and Eastern Europe 
                sought opportunities to build better lives.
              </p>
              <p>
                We bridge this gap by providing comprehensive recruitment services that benefit both parties. 
                Our approach goes beyond simple job placement – we ensure workers are properly supported 
                with accommodation, work permits, and fair wages, while farms get the dedicated workforce they need.
              </p>
              <p>
                Today, we're proud to have placed over 200 workers across 50+ farms throughout the UK, 
                with a 95% satisfaction rate from both workers and employers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <Badge variant="secondary" className="px-3 py-1">
                <CheckCircle className="w-4 h-4 mr-2" />
                Licensed Recruitment Agency
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Shield className="w-4 h-4 mr-2" />
                Visa Sponsorship Licensed
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Award className="w-4 h-4 mr-2" />
                Industry Accredited
              </Badge>
            </div>
          </div>
          
          {/* Symmetrical achievements grid */}
          <div className="grid grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 text-secondary rounded-full mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Balanced services section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
          {/* For Workers */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                For Agricultural Workers
              </h3>
              <p className="text-muted-foreground">
                We provide comprehensive support to help you succeed in UK agricultural employment.
              </p>
            </div>
            <div className="space-y-6">
              {workerServices.map((service, index) => (
                <Card key={index} className="border-l-4 border-l-secondary hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-secondary mt-1">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{service.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center lg:text-left">
              <Button variant="secondary" size="lg" className="w-full lg:w-auto min-w-[200px]">
                Apply as Worker →
              </Button>
            </div>
          </div>

          {/* For Employers */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                For Farm Employers
              </h3>
              <p className="text-muted-foreground">
                Access skilled agricultural workers and comprehensive HR support for your farming operations.
              </p>
            </div>
            <div className="space-y-6">
              {employerServices.map((service, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{service.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center lg:text-left">
              <Button variant="default" size="lg" className="w-full lg:w-auto min-w-[200px]">
                Hire Workers →
              </Button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-8">
            Why Choose Northern Manpower?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
              <p className="text-sm text-muted-foreground">
                8 years of successful placements with industry-leading retention rates and satisfaction scores.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Full Compliance</h4>
              <p className="text-sm text-muted-foreground">
                Licensed and regulated with full visa sponsorship capabilities and employment law compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Personal Touch</h4>
              <p className="text-sm text-muted-foreground">
                We care about people, not just placements. Ongoing support ensures success for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;