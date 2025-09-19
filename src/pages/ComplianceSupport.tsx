import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ComplianceSupport = () => {
  useEffect(() => {
    document.title = "Compliance Support · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Guidance and tools to help employers remain compliant with hiring regulations and data rules.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Compliance support for employers</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Resources to help employers meet local hiring laws, data protection requirements and equal opportunity rules.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Hiring regulations</h2>
            <p className="text-muted-foreground">
              Links to common regulatory checklists (localized per region where possible).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data protection</h2>
            <p className="text-muted-foreground">
              How to handle candidate data, retention policies and lawful processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting & audits</h2>
            <p className="text-muted-foreground">
              Tools to assemble audit trails and compliance logs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Consulting options</h2>
            <p className="text-muted-foreground">
              Paid support if you need help customizing policies.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Get compliance help
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceSupport;