import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Rules and terms that govern the use of Northern Manpower and its services.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Terms of service</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Legal terms between users and Northern Manpower — covers account use, content rules, liability, and termination.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">User obligations</h2>
            <p className="text-muted-foreground">
              Accurate information, acceptable use, prohibited actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service descriptions</h2>
            <p className="text-muted-foreground">
              What we provide and limitations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual property</h2>
            <p className="text-muted-foreground">
              Ownership of content, licensing of user content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Liability & disclaimers</h2>
            <p className="text-muted-foreground">
              Limits of liability and warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dispute resolution</h2>
            <p className="text-muted-foreground">
              Governing law and contact details.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Read full terms
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;