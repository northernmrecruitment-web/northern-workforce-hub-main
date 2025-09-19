import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TrainingProgram = () => {
  useEffect(() => {
    document.title = "Training Programs · Northern Manpower";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Upskill with curated training — short courses, certificates, and employer-backed programs.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top-of-page" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Professional training & development programs</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Advance your career with industry-recognized training programs. Develop in-demand skills through hands-on courses designed in partnership with leading employers across Northern England.
        </p>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Job placement rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2-12</div>
            <div className="text-sm text-muted-foreground">Weeks duration</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Course options</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">£0</div>
            <div className="text-sm text-muted-foreground">Upfront cost</div>
          </div>
        </div>

        {/* Program Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Training pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-xl font-semibold mb-3">Agricultural Skills</h3>
              <p className="text-muted-foreground mb-4">Master modern farming techniques, machinery operation, and sustainable agriculture practices.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tractor Operation</span>
                  <span className="text-muted-foreground">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Crop Management</span>
                  <span className="text-muted-foreground">6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Livestock Care</span>
                  <span className="text-muted-foreground">8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Farm Safety</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Learn more</Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-3">Healthcare & Care</h3>
              <p className="text-muted-foreground mb-4">Develop essential skills for healthcare support roles and elderly care positions.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Care Assistant Training</span>
                  <span className="text-muted-foreground">12 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>First Aid Certification</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Dementia Care</span>
                  <span className="text-muted-foreground">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Manual Handling</span>
                  <span className="text-muted-foreground">1 week</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Learn more</Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing & Production</h3>
              <p className="text-muted-foreground mb-4">Gain expertise in modern manufacturing processes, quality control, and industrial safety.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Machine Operation</span>
                  <span className="text-muted-foreground">6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality Control</span>
                  <span className="text-muted-foreground">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Lean Manufacturing</span>
                  <span className="text-muted-foreground">3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Health & Safety</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Learn more</Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🐟</div>
              <h3 className="text-xl font-semibold mb-3">Food Processing</h3>
              <p className="text-muted-foreground mb-4">Learn food safety, processing techniques, and quality assurance in the food industry.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Food Safety (HACCP)</span>
                  <span className="text-muted-foreground">3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Fish Processing</span>
                  <span className="text-muted-foreground">5 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Packaging Systems</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Cold Chain Management</span>
                  <span className="text-muted-foreground">4 weeks</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Learn more</Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">Digital Skills</h3>
              <p className="text-muted-foreground mb-4">Build essential digital literacy skills for the modern workplace across all industries.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Microsoft Office</span>
                  <span className="text-muted-foreground">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Entry & Analysis</span>
                  <span className="text-muted-foreground">6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Digital Communication</span>
                  <span className="text-muted-foreground">3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Basic IT Support</span>
                  <span className="text-muted-foreground">8 weeks</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Learn more</Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Practical Skills</h3>
              <p className="text-muted-foreground mb-4">Develop hands-on skills for trades, maintenance, and technical support roles.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Basic Electrical</span>
                  <span className="text-muted-foreground">6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Plumbing Basics</span>
                  <span className="text-muted-foreground">5 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Maintenance Skills</span>
                  <span className="text-muted-foreground">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Power Tool Safety</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Learn more</Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">How our training programs work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Skills Assessment</h3>
              <p className="text-sm text-muted-foreground">We evaluate your current skills and career goals to recommend the best training pathway.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-sm text-muted-foreground">Learn through practical exercises, real-world projects, and industry-standard equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-sm text-muted-foreground">Earn industry-recognized qualifications that employers actively seek and value.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Job Placement</h3>
              <p className="text-sm text-muted-foreground">We connect you with employers actively hiring for roles that match your new skills.</p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Who can benefit from our programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Career Changers</h3>
              <p className="text-muted-foreground mb-4">
                Looking to transition into a new industry? Our programs provide the specific skills and certifications needed to make a successful career change.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Transferable skills identification</li>
                <li>• Industry-specific training</li>
                <li>• Professional networking opportunities</li>
                <li>• Career transition support</li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Graduates</h3>
              <p className="text-muted-foreground mb-4">
                Bridge the gap between education and employment with practical skills that make you immediately valuable to employers.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Work-ready skills development</li>
                <li>• Professional experience opportunities</li>
                <li>• Industry connections and mentorship</li>
                <li>• Graduate employment support</li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Existing Professionals</h3>
              <p className="text-muted-foreground mb-4">
                Upgrade your skills to stay competitive, meet new job requirements, or advance to higher-level positions in your field.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Advanced skill development</li>
                <li>• Leadership and management training</li>
                <li>• Technology updates and certifications</li>
                <li>• Promotion preparation support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Funding & Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Funding & financial support</h2>
          <div className="bg-card border rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Free training opportunities</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium mb-2">Government-funded programs</h4>
                    <p className="text-sm text-muted-foreground">Many of our courses are fully funded through government initiatives for eligible participants.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium mb-2">Employer-sponsored training</h4>
                    <p className="text-sm text-muted-foreground">Partner employers fund training for positions they need to fill immediately.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium mb-2">Skills development schemes</h4>
                    <p className="text-sm text-muted-foreground">Local council and regional development funding for priority skills areas.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional support available</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">💰 Financial assistance</h4>
                    <p className="text-sm text-muted-foreground">Travel allowances, childcare support, and equipment provision for eligible learners.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">📅 Flexible scheduling</h4>
                    <p className="text-sm text-muted-foreground">Evening and weekend options to fit around existing commitments.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🎯 Personal mentoring</h4>
                    <p className="text-sm text-muted-foreground">One-on-one guidance throughout your training journey and job search.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🏢 Guaranteed interviews</h4>
                    <p className="text-sm text-muted-foreground">Direct connections with employers upon successful course completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Success stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">SJ</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Care Assistant Training Graduate</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "After being out of work for two years, the care assistant program gave me the confidence and skills I needed. I started my new job just one week after completing the course!"
              </p>
              <div className="text-sm text-primary font-medium">£18,500 starting salary • Full-time position</div>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">MT</span>
                </div>
                <div>
                  <h3 className="font-semibold">Mark Thompson</h3>
                  <p className="text-sm text-muted-foreground">Manufacturing Skills Graduate</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The hands-on training with real industrial equipment prepared me perfectly for my role. My employer was impressed with my practical knowledge from day one."
              </p>
              <div className="text-sm text-primary font-medium">£22,000 starting salary • Career progression plan</div>
            </div>
          </div>
        </section>

        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Ready to start your training journey?</h2>
          <p className="text-muted-foreground mb-6">
            Our training specialists will help you choose the right program and guide you through the enrollment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">Book a consultation</Button>
            <Button variant="outline" size="lg" className="px-8">Download program guide</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingProgram;