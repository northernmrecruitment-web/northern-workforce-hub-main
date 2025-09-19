import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DataRetention = () => {
  useEffect(() => {
    document.title = "Data Retention Policy · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "How long we keep different categories of data and the rationale for retention periods.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Data retention and deletion policy</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We explain retention periods for account data, application records, logs and backups, plus how users can request deletion.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Retention schedule</h2>
            <p className="text-muted-foreground">
              Accounts: X years after deactivation; Applications: Y years after last activity; Logs: Z months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why we retain data</h2>
            <p className="text-muted-foreground">
              Service continuity, legal requirements, fraud prevention.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Deletion & right to be forgotten</h2>
            <p className="text-muted-foreground">
              How to request deletion and what remains for legal reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Backups & archival</h2>
            <p className="text-muted-foreground">
              Temporary persistence in backups and the process to purge archived data.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Request data deletion
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataRetention;