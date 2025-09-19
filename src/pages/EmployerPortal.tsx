import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EmployerPortal = () => {
  useEffect(() => {
    document.title = "Employer Portal · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Centralized dashboard for posting jobs, managing applicants, and tracking hiring metrics.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Employer dashboard & hiring tools</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The portal gives hiring teams tools to manage postings, shortlist candidates, and measure hiring performance.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p className="text-muted-foreground">
              Live metrics on views, applications, time-to-hire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Team collaboration</h2>
            <p className="text-muted-foreground">
              Roles & permissions, shared notes, interview scheduling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Integrations</h2>
            <p className="text-muted-foreground">
              ATS and calendar integrations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Security & compliance</h2>
            <p className="text-muted-foreground">
              How we protect employer accounts and data.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Access the portal
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployerPortal;