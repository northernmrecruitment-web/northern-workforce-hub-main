import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PostJob = () => {
  useEffect(() => {
    document.title = "Post a Job · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Easily post job openings to reach qualified candidates. Flexible posting options for employers of all sizes.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Post jobs & find qualified candidates</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Reach Northern England's skilled workforce with our comprehensive job posting platform. Simple setup, powerful targeting, and dedicated support to find the right candidates quickly.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
            <div className="text-sm text-muted-foreground">Average time to first application</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Average applications per job</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Employer satisfaction rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support availability</div>
          </div>
        </div>

        {/* Job Posting Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Simple 3-step posting process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create your listing</h3>
              <p className="text-muted-foreground">Use our guided form to create a compelling job post. Add role details, requirements, and company information in minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Set targeting & budget</h3>
              <p className="text-muted-foreground">Choose your visibility options and target the right candidates. From basic listings to premium promoted posts.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Manage applications</h3>
              <p className="text-muted-foreground">Review qualified candidates, message applicants, and schedule interviews through our integrated dashboard.</p>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Transparent pricing options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Basic Job Post</h3>
              <div className="text-3xl font-bold mb-4">£49</div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• 30-day job listing</li>
                <li>• Standard visibility</li>
                <li>• Up to 50 applications</li>
                <li>• Email support</li>
              </ul>
              <Button variant="outline" className="w-full">Choose basic</Button>
            </div>
            <div className="bg-card border-2 border-primary rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 text-xs rounded-full">Most Popular</div>
              <h3 className="text-xl font-semibold mb-3">Featured Job Post</h3>
              <div className="text-3xl font-bold mb-4">£99</div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• 45-day featured listing</li>
                <li>• Premium visibility</li>
                <li>• Unlimited applications</li>
                <li>• Priority support</li>
                <li>• Candidate matching</li>
              </ul>
              <Button className="w-full">Choose featured</Button>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Urgent Hire</h3>
              <div className="text-3xl font-bold mb-4">£149</div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• 60-day urgent listing</li>
                <li>• Maximum visibility</li>
                <li>• Unlimited applications</li>
                <li>• Dedicated support</li>
                <li>• Fast-track screening</li>
              </ul>
              <Button variant="outline" className="w-full">Choose urgent</Button>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-3 mr-4">Start posting now</Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">View all pricing</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostJob;