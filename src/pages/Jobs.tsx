import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobSearch from "@/components/JobSearch";
import JobGrid from "@/components/JobGrid";
const Jobs = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find Your Next Farm Job
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Discover opportunities across United Kingdom's agricultural sector</p>
          </div>
          <JobSearch onSearchUpdate={() => {}} />
        </div>
        <JobGrid />
      </main>
      <Footer />
    </div>;
};
export default Jobs;