import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FindJob = () => {
  useEffect(() => {
    document.title = "Find Jobs · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Search curated job listings, filter by location and skill, and get matched with roles that fit your profile.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Find your next opportunity</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Use our job board to discover carefully vetted openings across industries. Filter by location, salary, 
          contract type, and remote options to find roles that match your goals.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <p className="text-muted-foreground">
              Search, filter, and apply. Save jobs, set alerts, and see application status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Smart matches</h2>
            <p className="text-muted-foreground">
              We surface roles that align with your skills and experience using employer filters and suggested matches.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Application tips</h2>
            <p className="text-muted-foreground">
              Use our built-in CV checker and quick-apply options to submit polished applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Northern Manpower jobs?</h2>
            <p className="text-muted-foreground">
              Curated postings, verified employers, and clear job descriptions to cut down on guesswork.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Browse jobs
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindJob;