import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Transparent plans for job postings, featured listings and employer tools. Choose monthly or pay-as-you-go.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Pricing that scales with your hiring needs</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare plans — from single listings to enterprise packages with applicant management.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Plans at a glance</h2>
            <p className="text-muted-foreground">
              Starter, Business, Enterprise — features and limits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Add-ons</h2>
            <p className="text-muted-foreground">
              Featured listing, social boosts, candidate screening.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Billing & invoices</h2>
            <p className="text-muted-foreground">
              Payment terms, invoices, and refunds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Free trials & discounts</h2>
            <p className="text-muted-foreground">
              Non-profit/education discounts and trial credits.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            View plans & pricing
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;