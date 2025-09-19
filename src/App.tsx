import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobApplication from "./pages/JobApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import Employers from "./pages/Employers";
import AboutPage from "./pages/AboutPage";
import Policies from "./pages/Policies";
import NotFound from "./pages/NotFound";
import FindJob from "./pages/FindJob";
import Register from "./pages/Register";
import CareerAdvice from "./pages/CareerAdvice";
import TrainingProgram from "./pages/TrainingProgram";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import PostJob from "./pages/PostJob";
import Pricing from "./pages/Pricing";
import EmployerPortal from "./pages/EmployerPortal";
import CaseStudies from "./pages/CaseStudies";
import ComplianceSupport from "./pages/ComplianceSupport";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DataRetention from "./pages/DataRetention";
import EqualOpportunity from "./pages/EqualOpportunity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/jobs/:id/apply" element={<JobApplication />} />
          <Route path="/jobs/:id/application-success" element={<ApplicationSuccess />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policies" element={<Policies />} />
          
          {/* Jobseeker Pages */}
          <Route path="/find-job" element={<FindJob />} />
          <Route path="/register" element={<Register />} />
          <Route path="/career-advice" element={<CareerAdvice />} />
          <Route path="/training-program" element={<TrainingProgram />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          
          {/* Employer Pages */}
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/employer-portal" element={<EmployerPortal />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/compliance-support" element={<ComplianceSupport />} />
          
          {/* Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/data-retention" element={<DataRetention />} />
          <Route path="/equal-opportunity" element={<EqualOpportunity />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
