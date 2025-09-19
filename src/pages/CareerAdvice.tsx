import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CareerAdvice = () => {
  useEffect(() => {
    document.title = "Career Advice & Resources · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Articles, guides and checklists for CVs, interviews, career growth and sector-specific advice.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Expert career advice & resources</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Get professional guidance from recruitment experts. Our comprehensive career resources help you stand out in today's competitive job market and advance your career with confidence.
        </p>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border rounded-lg p-6">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-semibold mb-2">CV Writing Guide 2024</h3>
            <p className="text-sm text-muted-foreground mb-4">Complete guide to creating a winning CV that gets you noticed by employers</p>
            <Button variant="outline" size="sm">Read guide</Button>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-semibold mb-2">Interview Success Tips</h3>
            <p className="text-sm text-muted-foreground mb-4">Expert strategies to ace your next interview and land your dream job</p>
            <Button variant="outline" size="sm">Learn more</Button>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold mb-2">Salary Negotiation</h3>
            <p className="text-sm text-muted-foreground mb-4">Know your worth and negotiate with confidence using proven techniques</p>
            <Button variant="outline" size="sm">Get tips</Button>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-6">CV & Cover Letter Excellence</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">CV Writing Essentials</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">Structure & Format</h4>
                    <p className="text-sm text-muted-foreground">Learn the optimal CV layout that recruiting professionals prefer. Use our templates designed specifically for UK employers.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">Key Achievements</h4>
                    <p className="text-sm text-muted-foreground">Showcase your accomplishments with quantifiable results. Use action verbs and specific metrics that demonstrate your impact.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">Skills Section</h4>
                    <p className="text-sm text-muted-foreground">Highlight relevant technical and soft skills. Match your skills to job requirements using industry keywords.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">Common Mistakes</h4>
                    <p className="text-sm text-muted-foreground">Avoid the top 10 CV mistakes that immediately eliminate candidates from consideration.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Cover Letter Strategy</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-medium mb-2">Compelling Opening</h4>
                    <p className="text-sm text-muted-foreground">Grab attention in the first paragraph. Show immediate value and connection to the role.</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-medium mb-2">Company Research</h4>
                    <p className="text-sm text-muted-foreground">Demonstrate knowledge of the company and role. Show how you align with their values and needs.</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-medium mb-2">Call to Action</h4>
                    <p className="text-sm text-muted-foreground">End with a strong closing that encourages the next step in the hiring process.</p>
                  </div>
                </div>
                <div className="mt-6 bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">💡 Pro Tip</h4>
                  <p className="text-sm">Customize each cover letter for the specific role. Generic letters are easily spotted and often ignored.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Interview Preparation & Success</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Before the Interview</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Research the company, role, and interviewer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Prepare STAR method examples for common questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Practice your elevator pitch and key achievements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Prepare thoughtful questions about the role</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Plan your outfit and route to the location</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">During the Interview</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Arrive 10-15 minutes early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Maintain positive body language and eye contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Listen carefully and ask for clarification if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use specific examples to demonstrate your skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Show enthusiasm for the role and company</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">After the Interview</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">→</span>
                    <span>Send a thank-you email within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">→</span>
                    <span>Reflect on the interview and note areas for improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">→</span>
                    <span>Follow up appropriately based on their timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">→</span>
                    <span>Continue your job search until you have an offer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">→</span>
                    <span>Handle rejection professionally and request feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Career Planning & Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Goal Setting Framework</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">1. Self-Assessment</h4>
                    <p className="text-sm text-muted-foreground">Evaluate your current skills, interests, and values. Identify your strengths and areas for development.</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">2. Market Research</h4>
                    <p className="text-sm text-muted-foreground">Research industry trends, salary ranges, and required qualifications for your target roles.</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">3. SMART Goals</h4>
                    <p className="text-sm text-muted-foreground">Set Specific, Measurable, Achievable, Relevant, and Time-bound career objectives.</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">4. Action Plan</h4>
                    <p className="text-sm text-muted-foreground">Create a step-by-step plan with milestones and deadlines to achieve your goals.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">In-Demand Skills</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Digital Literacy</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Communication</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Problem Solving</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Leadership</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Adaptability</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Focus on developing these universally valuable skills alongside technical expertise.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Learning Resources</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Online courses and certifications</li>
                      <li>• Professional workshops and seminars</li>
                      <li>• Industry conferences and networking events</li>
                      <li>• Mentorship and coaching programs</li>
                      <li>• On-the-job training opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Salary Negotiation & Market Value</h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Know Your Worth</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Research Market Rates</h4>
                      <p className="text-sm text-muted-foreground mb-2">Use salary comparison tools and industry reports to understand your market value:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• National salary surveys</li>
                        <li>• Industry-specific reports</li>
                        <li>• Company glassdoor reviews</li>
                        <li>• Professional network insights</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Document Your Value</h4>
                      <p className="text-sm text-muted-foreground">Prepare evidence of your contributions and achievements to justify your salary expectations.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Negotiation Strategy</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">🎯 Timing is Everything</h4>
                      <p className="text-sm">Wait for a job offer before discussing salary. This puts you in the strongest negotiating position.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">💬 Professional Approach</h4>
                      <p className="text-sm">Express enthusiasm for the role while professionally presenting your case for higher compensation.</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">🔄 Consider Total Package</h4>
                      <p className="text-sm">Look beyond base salary. Consider benefits, flexible working, professional development, and other perks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">How long should my CV be?</h3>
                <p className="text-sm text-muted-foreground">For most professionals, 2 pages is ideal. Recent graduates can use 1 page, while senior executives may extend to 3 pages if necessary.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Should I include a photo on my CV?</h3>
                <p className="text-sm text-muted-foreground">In the UK, it's generally recommended not to include a photo unless specifically requested or required for the role (e.g., acting, modeling).</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">How do I explain employment gaps?</h3>
                <p className="text-sm text-muted-foreground">Be honest and focus on any positive activities during the gap (education, volunteering, caring responsibilities, freelancing). Keep explanations brief and positive.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">When should I follow up after an interview?</h3>
                <p className="text-sm text-muted-foreground">Send a thank-you email within 24 hours, then follow up according to their stated timeline. If no timeline was given, wait 1-2 weeks before following up.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">How do I change careers successfully?</h3>
                <p className="text-sm text-muted-foreground">Focus on transferable skills, consider additional training or certifications, network in your target industry, and consider transitional roles that bridge your current and desired fields.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Need personalized career advice?</h2>
            <p className="text-muted-foreground mb-6">Our career consultants provide one-on-one guidance tailored to your specific situation and goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">Book a consultation</Button>
              <Button variant="outline" size="lg" className="px-8">Download CV template</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerAdvice;