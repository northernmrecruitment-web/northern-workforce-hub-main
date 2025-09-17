import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="font-heading font-bold text-2xl mb-4">
                Northern Manpower
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Connecting skilled workers with trusted employers across Northern England. 
                Your reliable partner for recruitment in healthcare, agriculture, and manufacturing.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">For Jobseekers</h4>
              <ul className="space-y-3">
                <li><a href="/jobs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Find Jobs</a></li>
                <li><a href="/register" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Register</a></li>
                <li><a href="/career-advice" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Career Advice</a></li>
                <li><a href="/training" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Training Programs</a></li>
                <li><a href="/safety" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Safety Guidelines</a></li>
              </ul>
            </div>

            {/* Employer Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">For Employers</h4>
              <ul className="space-y-3">
                <li><a href="/post-job" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Post a Job</a></li>
                <li><a href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pricing Plans</a></li>
                <li><a href="/employer-portal" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Employer Portal</a></li>
                <li><a href="/case-studies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Case Studies</a></li>
                <li><a href="/compliance" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Compliance Support</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Stay Connected</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>0800 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="w-4 h-4" />
                  <span>hello@northernmanpower.example</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin className="w-4 h-4" />
                  <span>Manchester, UK</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-primary-foreground/80 mb-3">Get job alerts & industry news</p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Your email" 
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button variant="secondary" size="default">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Northern Manpower. All rights reserved.
            </div>
            
            {/* Policy Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/policies/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/policies/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/policies/data-retention" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Data Retention
              </a>
              <a href="/policies/equality" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Equal Opportunity
              </a>
              <a href="/policies" className="text-primary-foreground hover:text-primary-foreground transition-colors font-medium">
                All Policies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;