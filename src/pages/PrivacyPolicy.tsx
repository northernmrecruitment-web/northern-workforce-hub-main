import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "How we collect, use and retain your information, and how you can control your data.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy policy — your data and how we use it</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Clear explanation of data we collect, why we collect it, retention practices, and rights available to users.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information collected</h2>
            <p className="text-muted-foreground">
              Account info, application data, usage logs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How we use data</h2>
            <p className="text-muted-foreground">
              Service delivery, matching, analytics, legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-party sharing</h2>
            <p className="text-muted-foreground">
              When we share with service providers or partners (and why).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your rights</h2>
            <p className="text-muted-foreground">
              Access, correction, deletion requests and how to contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact & complaints</h2>
            <p className="text-muted-foreground">
              Support email and data protection officer contact.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Contact us about privacy
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;