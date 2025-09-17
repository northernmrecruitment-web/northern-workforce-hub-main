import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, Briefcase } from "lucide-react";
const Employers = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Find Skilled Farm Workers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with experienced agricultural workers across Northern Ontario. 
              Our platform helps you find reliable, skilled workers for seasonal and permanent positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[200px]">
                Post a Job
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Browse Workers
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Northern Manpower?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Skilled Workers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Access to pre-screened, experienced agricultural workers
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Seasonal, temporary, and permanent placement options
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Compliance Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Full regulatory compliance and documentation assistance
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Industry Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Deep understanding of Northern Ontario's agricultural needs
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Worker?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Join hundreds of farms across United Kingdom who trust us to find reliable workers.</p>
            <Button size="lg" className="min-w-[200px]">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Employers;