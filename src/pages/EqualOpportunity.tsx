import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EqualOpportunity = () => {
  useEffect(() => {
    document.title = "Equal Opportunity Policy · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Our commitment to fair hiring practices and non-discrimination for both employers and jobseekers.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Equal opportunity & non-discrimination</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Northern Manpower is committed to inclusive hiring and does not tolerate discriminatory practices.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our commitment</h2>
            <p className="text-muted-foreground">
              Non-discrimination across protected characteristics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Employer responsibilities</h2>
            <p className="text-muted-foreground">
              Guidance for job posts and interview practices to avoid bias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting discrimination</h2>
            <p className="text-muted-foreground">
              How users can report discriminatory postings or conduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Training & resources</h2>
            <p className="text-muted-foreground">
              Links to best practices and unconscious-bias education resources.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Report an incident
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EqualOpportunity;