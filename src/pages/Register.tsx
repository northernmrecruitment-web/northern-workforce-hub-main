import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Register = () => {
  useEffect(() => {
    document.title = "Register · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Create your Northern Manpower account to apply for jobs, save searches, and access training resources.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Join Northern Manpower today</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create your free account in under 2 minutes. Get instant access to personalized job recommendations, application tracking, and exclusive career resources.
        </p>

        {/* Benefits Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold mb-2">Smart Job Matching</h3>
            <p className="text-sm text-muted-foreground">Receive personalized job recommendations based on your skills and preferences</p>
          </div>
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="font-semibold mb-2">Application Tracking</h3>
            <p className="text-sm text-muted-foreground">Monitor your applications and interview progress in one dashboard</p>
          </div>
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="font-semibold mb-2">Instant Alerts</h3>
            <p className="text-sm text-muted-foreground">Be first to know about new opportunities matching your criteria</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-md mx-auto bg-card border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center">Create your account</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full name</label>
              <input type="text" placeholder="Enter your full name" className="w-full p-3 border rounded-md" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email address</label>
              <input type="email" placeholder="your.email@example.com" className="w-full p-3 border rounded-md" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone number</label>
              <input type="tel" placeholder="+44 7XXX XXX XXX" className="w-full p-3 border rounded-md" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" placeholder="Create a secure password" className="w-full p-3 border rounded-md" />
            </div>
            
            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <a href="/terms-of-service" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <Button className="w-full">Create account</Button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">Or sign up with</p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <span className="mr-2">📧</span> Google
              </Button>
              <Button variant="outline" className="w-full">
                <span className="mr-2">💼</span> LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Features Details */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why create an account?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">🚀 Career acceleration</h3>
                <p className="text-muted-foreground text-sm">Access exclusive job opportunities, career coaching resources, and skill development programs tailored to your industry.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">💼 Professional profile</h3>
                <p className="text-muted-foreground text-sm">Build a comprehensive profile that showcases your skills, experience, and achievements to potential employers.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">🎯 Targeted opportunities</h3>
                <p className="text-muted-foreground text-sm">Receive job recommendations that match your location preferences, salary expectations, and career goals.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">📊 Application insights</h3>
                <p className="text-muted-foreground text-sm">Track your application success rate and get insights on how to improve your job search strategy.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your privacy is protected</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <h3 className="font-medium mb-1">Secure data handling</h3>
                  <p className="text-muted-foreground">Your information is encrypted and stored securely according to UK data protection standards.</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">👁️</div>
                  <h3 className="font-medium mb-1">Profile visibility control</h3>
                  <p className="text-muted-foreground">Choose what information employers can see and when your profile is visible to recruiters.</p>
                </div>
                <div className="text-2xl mb-2">🗑️</div>
                  <h3 className="font-medium mb-1">Right to deletion</h3>
                  <p className="text-muted-foreground">You can delete your account and all associated data at any time with a single click.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Quick setup process</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <h3 className="font-medium">Basic information (2 minutes)</h3>
                  <p className="text-sm text-muted-foreground">Name, email, phone number, and location preferences</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <h3 className="font-medium">Work preferences (3 minutes)</h3>
                  <p className="text-sm text-muted-foreground">Job types, salary expectations, and availability</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <h3 className="font-medium">Upload CV (optional)</h3>
                  <p className="text-sm text-muted-foreground">Add your CV for faster applications and better matching</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Already have an account? <a href="/login" className="text-primary hover:underline">Sign in here</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;