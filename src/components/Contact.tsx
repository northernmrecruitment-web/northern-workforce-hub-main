import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Users,
  Briefcase,
  AlertCircle,
  CheckCircle,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+44 20 7123 4567",
      subtitle: "Mon-Fri 8am-6pm GMT",
      action: "Call Now",
      urgent: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@northernmanpower.co.uk",
      subtitle: "Response within 24 hours",
      action: "Send Email",
      urgent: false
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+44 7700 900123",
      subtitle: "Available 24/7 for urgent queries",
      action: "Message Us",
      urgent: true
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Emergency",
      details: "+44 7700 900124",
      subtitle: "24/7 emergency support line",
      action: "Emergency Call",
      urgent: true
    }
  ];

  const offices = [
    {
      name: "Head Office - London",
      address: "Northern Manpower Ltd\n123 Agricultural House\nLondon EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "london@northernmanpower.co.uk",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      services: ["Worker Registration", "Employer Services", "Visa Support"]
    },
    {
      name: "Regional Office - Manchester",
      address: "Unit 45, Northern Plaza\nManchester M1 2BB",
      phone: "+44 161 234 5678",
      email: "manchester@northernmanpower.co.uk",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      services: ["Local Job Placement", "Worker Support"]
    },
    {
      name: "Regional Office - Edinburgh",
      address: "Scottish Agricultural Centre\nEdinburgh EH1 3AA",
      phone: "+44 131 345 6789",
      email: "scotland@northernmanpower.co.uk",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      services: ["Highland Placements", "Seasonal Work"]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Centered header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Phone className="w-4 h-4" />
            Available 24/7 for Emergency Support
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to start your agricultural career or find the workers your farm needs? 
            Contact us today for personalized support.
          </p>
        </div>

        {/* Symmetrical contact methods grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <Card key={index} className={`text-center hover:shadow-lg transition-shadow duration-300 ${method.urgent ? 'border-secondary' : ''}`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  method.urgent ? 'bg-secondary text-white' : 'bg-primary/10 text-primary'
                }`}>
                {method.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-3">{method.title}</h3>
                <p className="text-foreground font-medium mb-2">{method.details}</p>
                <p className="text-sm text-muted-foreground mb-6">{method.subtitle}</p>
                <Button
                  variant={method.urgent ? "secondary" : "outline"} 
                  size="sm" 
                  className="w-full"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+44 or your country code"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiryType">What can we help you with? *</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="worker-application">I want to apply for farm work</SelectItem>
                        <SelectItem value="employer-hiring">I need to hire farm workers</SelectItem>
                        <SelectItem value="visa-support">I need visa/work permit help</SelectItem>
                        <SelectItem value="accommodation">Questions about accommodation</SelectItem>
                        <SelectItem value="current-placement">I'm a current worker with questions</SelectItem>
                        <SelectItem value="partnership">Business partnership inquiry</SelectItem>
                        <SelectItem value="other">Other inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please provide details about your inquiry, including any specific requirements or questions..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Our Offices
              </h3>
            </div>
            
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" />
                    {office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Address</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Contact</h4>
                      <p className="text-sm text-muted-foreground mb-1">{office.phone}</p>
                      <p className="text-sm text-muted-foreground">{office.email}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Business Hours
                    </h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {office.hours}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Notice */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-orange-900 mb-1">Emergency Support</h4>
                    <p className="text-sm text-orange-800 mb-2">
                      If you're a current worker facing an emergency situation, please call our 24/7 emergency line.
                    </p>
                    <p className="font-semibold text-orange-900">Emergency: +44 7700 900124</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;