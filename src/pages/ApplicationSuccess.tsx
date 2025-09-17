import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowLeft, Mail, Phone, Calendar, Home } from "lucide-react";
import { useEffect, useState } from "react";

const ApplicationSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [applicationId, setApplicationId] = useState<string>('');

  useEffect(() => {
    const id = location.state?.applicationId;
    if (!id) {
      navigate('/jobs');
      return;
    }
    setApplicationId(id);
  }, [location.state, navigate]);

  const nextSteps = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Confirmation Email",
      description: "You'll receive a confirmation email within the next few minutes with your application details."
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Employer Review",
      description: "The employer will review your application and contact you within 2-3 business days."
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Interview Process",
      description: "If selected, you'll be contacted to schedule an interview or phone screening."
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "Job Placement",
      description: "Successful candidates will receive job details and start date information."
    }
  ];

  if (!applicationId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/jobs')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>

          {/* Success Message */}
          <Card className="mb-8 border-green-200 bg-green-50/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-800">
                Application Submitted Successfully!
              </CardTitle>
              <CardDescription className="text-green-700">
                Your application has been received and is being processed.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Application Reference Number</p>
                <p className="text-lg font-mono font-semibold text-foreground">
                  APP-{applicationId}
                </p>
              </div>
              <p className="text-muted-foreground">
                Please save this reference number for your records. You can use it to track your application status.
              </p>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
              <CardDescription>
                Here's what you can expect in the coming days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Check Your Email</h4>
                <p className="text-muted-foreground text-sm">
                  Make sure to check your email regularly, including your spam/junk folder, for updates about your application.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Keep Your Phone Available</h4>
                <p className="text-muted-foreground text-sm">
                  Employers may call you directly to discuss your application or schedule an interview.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Application Status</h4>
                <p className="text-muted-foreground text-sm">
                  You can contact the employer directly if you haven't heard back within 5 business days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => navigate('/jobs')}
              className="flex-1"
            >
              Browse More Jobs
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.print()}
              className="flex-1"
            >
              Print Confirmation
            </Button>
          </div>

          {/* Tips for Job Seekers */}
          <Card>
            <CardHeader>
              <CardTitle>Tips While You Wait</CardTitle>
              <CardDescription>
                Make the most of your time while waiting for a response
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Continue applying to other relevant positions to increase your chances
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Research the company and role to prepare for potential interviews
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Prepare your references and any additional documents they might request
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Update your profile and CV with any new skills or experiences
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Need help or have questions about your application?
            </p>
            <Link to="/contact">
              <Button variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationSuccess;