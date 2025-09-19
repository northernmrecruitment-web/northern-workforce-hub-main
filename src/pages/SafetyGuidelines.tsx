import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SafetyGuidelines = () => {
  useEffect(() => {
    document.title = "Safety Guidelines · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Safety rules, reporting steps and best practices for safe job applications and interviews.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Your safety is our priority</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Stay protected throughout your job search with our comprehensive safety guidelines. Learn to identify legitimate opportunities, protect your personal information, and work safely with verified employers.
        </p>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-red-600 text-xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-red-800">Report Suspicious Activity</h3>
              <p className="text-sm text-red-700">If you encounter any suspicious job postings or unsafe situations, report them immediately: <a href="tel:0800-123-4567" className="underline">0800 123 4567</a></p>
            </div>
          </div>
        </div>

        {/* Key Safety Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-green-600">🛡️</span>
            </div>
            <h3 className="font-semibold mb-2">Verified Employers Only</h3>
            <p className="text-sm text-muted-foreground">All employers on our platform are thoroughly vetted and verified before posting jobs</p>
          </div>
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-600">🔒</span>
            </div>
            <h3 className="font-semibold mb-2">Secure Communications</h3>
            <p className="text-sm text-muted-foreground">All communications happen through our secure platform until you choose to connect directly</p>
          </div>
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-purple-600">📞</span>
            </div>
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm text-muted-foreground">Our safety team is available around the clock to address concerns and investigate reports</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-8">Spotting job scams</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">🚨 Major red flags</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 className="font-medium mb-2">Upfront payment requests</h4>
                    <p className="text-sm text-muted-foreground">Legitimate employers never ask for money upfront for training, equipment, or application processing.</p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 className="font-medium mb-2">Too good to be true offers</h4>
                    <p className="text-sm text-muted-foreground">Extremely high salaries for minimal work, no experience required for senior positions, or guaranteed high earnings.</p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 className="font-medium mb-2">Poor communication</h4>
                    <p className="text-sm text-muted-foreground">Generic emails, poor grammar, vague job descriptions, or pressure to respond immediately.</p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 className="font-medium mb-2">Personal information requests</h4>
                    <p className="text-sm text-muted-foreground">Asking for National Insurance numbers, bank details, or copies of documents before meeting or offering a job.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">✅ Legitimate job signs</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-medium mb-2">Professional communication</h4>
                    <p className="text-sm text-muted-foreground">Clear job descriptions, professional email addresses, and detailed company information.</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-medium mb-2">Realistic salary ranges</h4>
                    <p className="text-sm text-muted-foreground">Pay rates that align with industry standards and experience requirements.</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-medium mb-2">Proper interview process</h4>
                    <p className="text-sm text-muted-foreground">Structured interviews, meeting at business premises, and time to ask questions.</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-medium mb-2">Verified company details</h4>
                    <p className="text-sm text-muted-foreground">Registered business address, working phone numbers, and online presence you can verify.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8">Interview safety guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">In-person interviews</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-sm">Meet at the company's registered business address</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-sm">Tell someone where you're going and when you'll be back</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-sm">Bring identification but keep originals secure</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-sm">Trust your instincts - leave if something feels wrong</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-sm">Verify the interviewer's identity and role</span>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">⚠️ Never agree to:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Meet at private residences or unofficial locations</li>
                    <li>• Interviews in vehicles or isolated areas</li>
                    <li>• Unusual interview times (very early/late)</li>
                    <li>• Requests to bring money or expensive items</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Virtual interviews</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-sm">Use professional video platforms (Zoom, Teams, etc.)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-sm">Test your technology beforehand</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-sm">Ensure good lighting and professional background</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-sm">Keep the interview professional and recorded if requested</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-sm">Verify the interviewer's email domain matches the company</span>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">💡 Pro tip:</h4>
                  <p className="text-sm">Take notes during the interview and ask for next steps. Legitimate employers will provide clear timelines and contact information.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8">Protecting your personal information</h2>
            <div className="bg-card border rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Information you should NEVER share</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-red-600">
                      <span>❌</span>
                      <span className="text-sm">National Insurance number (until job offer)</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <span>❌</span>
                      <span className="text-sm">Bank account or payment details</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <span>❌</span>
                      <span className="text-sm">Passport or driving license numbers</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <span>❌</span>
                      <span className="text-sm">Copies of official documents via email</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <span>❌</span>
                      <span className="text-sm">Passwords or security questions</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <span>❌</span>
                      <span className="text-sm">Family member contact details</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Safe information to share initially</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-green-600">
                      <span>✓</span>
                      <span className="text-sm">Name and contact information</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <span>✓</span>
                      <span className="text-sm">CV and employment history</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <span>✓</span>
                      <span className="text-sm">General location (city/region)</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <span>✓</span>
                      <span className="text-sm">Professional qualifications</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <span>✓</span>
                      <span className="text-sm">Availability and notice period</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <span>✓</span>
                      <span className="text-sm">Professional references (after interview)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8">Workplace safety standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Your rights as a worker</h3>
                <ul className="text-sm space-y-2">
                  <li>• Safe working environment</li>
                  <li>• Proper training and equipment</li>
                  <li>• Fair wages and working hours</li>
                  <li>• Protection from discrimination</li>
                  <li>• Right to report safety concerns</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Before starting work</h3>
                <ul className="text-sm space-y-2">
                  <li>• Receive proper health & safety training</li>
                  <li>• Get personal protective equipment</li>
                  <li>• Understand emergency procedures</li>
                  <li>• Know who to contact for issues</li>
                  <li>• Complete right-to-work checks</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Red flags at work</h3>
                <ul className="text-sm space-y-2">
                  <li>• No safety training provided</li>
                  <li>• Unsafe working conditions</li>
                  <li>• Pay below minimum wage</li>
                  <li>• Excessive working hours</li>
                  <li>• Threats or intimidation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8">How to report safety concerns</h2>
            <div className="bg-card border rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What to report</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Suspicious job postings or fake employers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Requests for money or personal documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Unsafe working conditions or practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Harassment or discriminatory behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Wage theft or contract violations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">How to report</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">🔗 Online reporting</h4>
                      <p className="text-sm">Use our secure online form to report issues with detailed information and evidence.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">📞 Phone hotline</h4>
                      <p className="text-sm">Call our 24/7 safety hotline: <strong>0800 123 4567</strong></p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">✉️ Email support</h4>
                      <p className="text-sm">Send detailed reports to: <strong>safety@northernmanpower.example</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">What happens after you report?</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-blue-600">1. Immediate review</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-blue-600">2. Investigation</div>
                    <div className="text-muted-foreground">2-5 business days</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-blue-600">3. Action taken</div>
                    <div className="text-muted-foreground">As appropriate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-blue-600">4. Follow-up</div>
                    <div className="text-muted-foreground">Status update</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center bg-primary/5 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Stay safe, stay informed</h2>
          <p className="text-muted-foreground mb-6">
            Your safety is our top priority. If you have any concerns or questions about job safety, don't hesitate to contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">Contact safety team</Button>
            <Button variant="outline" size="lg" className="px-8">Download safety checklist</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyGuidelines;