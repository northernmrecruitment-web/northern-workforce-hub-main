import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 font-bold text-xl">
                NM
              </div>
              <div className="text-xl font-heading font-bold text-foreground">
                Northern Manpower
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/jobs" className="text-foreground hover:text-primary transition-colors font-medium">
              Find Jobs
            </Link>
            <Link to="/employers" className="text-foreground hover:text-primary transition-colors font-medium">
              For Employers
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/policies" className="text-foreground hover:text-primary transition-colors font-medium">
              Policies
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="default">
              For Jobseekers
            </Button>
            <Button variant="cta" size="default">
              For Employers
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/jobs" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Find Jobs
              </Link>
              <Link to="/employers" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                For Employers
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                About
              </Link>
              <Link to="/policies" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Policies
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" size="default" className="w-full">
                  For Jobseekers
                </Button>
                <Button variant="cta" size="default" className="w-full">
                  For Employers
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;