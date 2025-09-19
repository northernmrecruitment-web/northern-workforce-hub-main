import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Success stories from employers and jobseekers who found great matches using our platform.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Real results from people and companies</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Read how employers reduced time-to-hire and how candidates found meaningful roles.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Employer success</h2>
            <p className="text-muted-foreground">
              Example: SMB reduced hiring time by 40% with featured listings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Candidate stories</h2>
            <p className="text-muted-foreground">
              Profiles of jobseekers who transitioned careers using training + jobs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Metrics & impact</h2>
            <p className="text-muted-foreground">
              Aggregate outcomes and customer satisfaction stats.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get featured</h2>
            <p className="text-muted-foreground">
              How to submit your story for consideration.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Read success stories
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;