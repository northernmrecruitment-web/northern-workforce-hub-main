import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySummary from "@/components/PolicySummary";

const Policies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Policies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about our commitment to fair employment practices and worker protection
            </p>
          </div>
          <PolicySummary />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;