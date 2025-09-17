import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, Clock, Download } from "lucide-react";

const PolicySummary = () => {
  const policies = [
    {
      icon: Shield,
      title: "Privacy Policy",
      summary: "We collect only what we need to match you with jobs. IDs & certifications are stored securely, and you can request deletion.",
      link: "/policies/privacy"
    },
    {
      icon: Users,
      title: "Equal Opportunity",
      summary: "Northern Manpower is committed to equal opportunities regardless of background, ensuring fair treatment for all.",
      link: "/policies/equality"
    },
    {
      icon: Clock,
      title: "Data Retention",
      summary: "Application records retained for up to 3 years for business and legal requirements. You can request early deletion.",
      link: "/policies/data-retention"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Our Policies Made Simple
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding your rights and our commitments. Clear, accessible policies you can trust.
          </p>
        </div>

        {/* Policy Cards - Symmetrical Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <Card key={index} className="card-elevated h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-heading">{policy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {policy.summary}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Full Policy
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Access Footer */}
        <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                Need All Policies?
              </h3>
              <p className="text-muted-foreground">
                Download our complete policy pack including Privacy, Terms, Health & Safety, and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="lg">
                <FileText className="w-4 h-4 mr-2" />
                View All Policies
              </Button>
              <Button variant="secondary" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Questions about our policies? Email us at{" "}
            <a href="mailto:privacy@northernmanpower.example" className="text-primary hover:underline font-medium">
              privacy@northernmanpower.example
            </a>{" "}
            or call our support line.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicySummary;