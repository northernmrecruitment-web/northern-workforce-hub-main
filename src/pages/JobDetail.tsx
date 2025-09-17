import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getJobs } from "@/data/jobs";
import { 
  MapPin, 
  Clock, 
  Calendar, 
  DollarSign, 
  Star, 
  Home, 
  Bus, 
  ArrowLeft,
  CheckCircle,
  Users,
  Globe,
  Phone,
  Mail,
  Bookmark,
  Share2
} from "lucide-react";
import { useMemo } from "react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job = useMemo(() => {
    const jobs = getJobs();
    return jobs.find(j => j.id === id);
  }, [id]);

  const relatedJobs = useMemo(() => {
    if (!job) return [];
    const jobs = getJobs();
    return jobs
      .filter(j => j.id !== job.id && (j.sector === job.sector || j.location === job.location))
      .slice(0, 3);
  }, [job]);

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-8">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
              <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
              <Button onClick={() => navigate('/jobs')}>
                Back to Jobs
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getSectorIcon = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'healthcare': return '🏥';
      case 'agriculture': return '🌾';
      case 'manufacturing': return '🏭';
      case 'care': return '👥';
      default: return '💼';
    }
  };

  const formatRate = (rate: { min: number; max: number; period: string }) => {
    return `£${rate.min}-${rate.max}/${rate.period}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/jobs')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Jobs
            </Button>
            <nav className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/jobs" className="hover:text-foreground">Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{job.title}</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{getSectorIcon(job.sector)}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-2xl">{job.title}</CardTitle>
                          {job.featured && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
                        </div>
                        <CardDescription className="text-lg">{job.company}</CardDescription>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>Start: {job.startDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {job.urgent && <Badge variant="destructive">Urgent</Badge>}
                    {job.featured && <Badge variant="default">Featured</Badge>}
                    <Badge variant="secondary">{job.experienceLevel}</Badge>
                    <Badge variant="outline">{job.sector}</Badge>
                  </div>
                </CardHeader>
              </Card>

              {/* Job Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Job Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Pay Rate</p>
                        <p className="text-lg font-semibold text-secondary">{formatRate(job.rate)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Shift Type</p>
                        <p className="text-muted-foreground">{job.shiftType}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Experience Level</p>
                        <p className="text-muted-foreground">{job.experienceLevel}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Visa Sponsorship</p>
                        <p className="text-muted-foreground">{job.visaSponsorship ? 'Available' : 'Not Available'}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Job Description</h3>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>

                  {job.requirements && job.requirements.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold mb-3">Requirements</h3>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {job.benefits && job.benefits.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold mb-3">Benefits</h3>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Additional Benefits */}
              {(job.accommodation?.provided || job.transport?.provided) && (
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {job.accommodation?.provided && (
                      <div className="flex items-start gap-3">
                        <Home className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-medium">Accommodation Provided</p>
                          <p className="text-muted-foreground">
                            {job.accommodation.type && `Type: ${job.accommodation.type}`}
                            {job.accommodation.cost && ` • Cost: ${job.accommodation.cost}`}
                          </p>
                        </div>
                      </div>
                    )}
                    {job.transport?.provided && (
                      <div className="flex items-start gap-3">
                        <Bus className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-medium">Transport Provided</p>
                          {job.transport.details && (
                            <p className="text-muted-foreground">{job.transport.details}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Apply for this Job</CardTitle>
                  <CardDescription>
                    Ready to start your application?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => navigate(`/jobs/${job.id}/apply`)}
                  >
                    Apply Now
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Save Job
                  </Button>
                  
                  {job.applicationDeadline && (
                    <p className="text-sm text-muted-foreground text-center">
                      Application deadline: {job.applicationDeadline}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <a href={`mailto:${job.contactEmail}`} className="text-secondary hover:underline">
                      {job.contactEmail}
                    </a>
                  </div>
                  {job.contactPhone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a href={`tel:${job.contactPhone}`} className="text-secondary hover:underline">
                        {job.contactPhone}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Related Jobs */}
              {relatedJobs.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Related Jobs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedJobs.map((relatedJob) => (
                      <div 
                        key={relatedJob.id}
                        className="border rounded-lg p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                        onClick={() => navigate(`/jobs/${relatedJob.id}`)}
                      >
                        <h4 className="font-medium text-sm mb-1">{relatedJob.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{relatedJob.company}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-secondary font-medium">
                            {formatRate(relatedJob.rate)}
                          </span>
                          <span className="text-xs text-muted-foreground">{relatedJob.location}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;