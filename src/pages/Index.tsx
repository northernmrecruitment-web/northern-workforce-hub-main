import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JobSearch from "@/components/JobSearch";
import JobGrid from "@/components/JobGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto">
          <JobSearch />
        </div>
        <JobGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
