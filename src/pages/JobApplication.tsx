import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getJobs } from "@/data/jobs";
import { 
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  MapPin,
  Building,
  User
} from "lucide-react";
import { useMemo } from "react";
import { toast } from "sonner";

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  experienceLevel: string;
  availability: string;
  coverLetter: string;
  cv: File | null;
  rightToWork: boolean;
  transportAccess: boolean;
  accommodationNeeded: boolean;
  references: boolean;
}

const JobApplication = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job = useMemo(() => {
    const jobs = getJobs();
    return jobs.find(j => j.id === id);
  }, [id]);

  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    experienceLevel: '',
    availability: '',
    coverLetter: '',
    cv: null,
    rightToWork: false,
    transportAccess: false,
    accommodationNeeded: false,
    references: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-8">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
              <p className="text-muted-foreground mb-6">The job you're trying to apply for doesn't exist.</p>
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

  const handleInputChange = (field: keyof ApplicationData, value: string | boolean | File | null) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (file: File) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a PDF or Word document');
      return;
    }

    if (file.size > maxSize) {
      toast.error('File size must be less than 5MB');
      return;
    }

    handleInputChange('cv', file);
    toast.success('CV uploaded successfully');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'experienceLevel', 'availability'];
    const missingFields = requiredFields.filter(field => !applicationData[field as keyof ApplicationData]);

    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    if (!applicationData.rightToWork) {
      toast.error('You must confirm your right to work in the UK');
      setIsSubmitting(false);
      return;
    }

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Store application in localStorage (for demo purposes)
    const applicationId = Date.now().toString();
    const application = {
      id: applicationId,
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      submittedAt: new Date().toISOString(),
      status: 'submitted',
      ...applicationData
    };

    const existingApplications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
    existingApplications.push(application);
    localStorage.setItem('jobApplications', JSON.stringify(existingApplications));

    toast.success('Application submitted successfully!');
    setIsSubmitting(false);
    navigate(`/jobs/${job.id}/application-success`, { 
      state: { applicationId } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(`/jobs/${job.id}`)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Job Details
            </Button>
            <nav className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/jobs" className="hover:text-foreground">Jobs</Link>
              <span className="mx-2">/</span>
              <Link to={`/jobs/${job.id}`} className="hover:text-foreground">{job.title}</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Apply</span>
            </nav>
          </div>

          {/* Job Summary */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <CardTitle>Apply for {job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4">
                    <span>{job.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Please provide your personal details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={applicationData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={applicationData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={applicationData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={applicationData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      value={applicationData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Work Experience & Availability</CardTitle>
                <CardDescription>
                  Tell us about your experience and when you can start
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Experience Level *</Label>
                  <Select value={applicationData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-experience">No experience</SelectItem>
                      <SelectItem value="some-experience">Some experience</SelectItem>
                      <SelectItem value="experienced">Experienced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">When can you start? *</Label>
                  <Select value={applicationData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1-week">Within 1 week</SelectItem>
                      <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                    value={applicationData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* CV Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  CV/Resume Upload
                </CardTitle>
                <CardDescription>
                  Upload your CV or resume (PDF or Word document, max 5MB)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? 'border-secondary bg-secondary/5' : 'border-border'
                  }`}
                  onDragEnter={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    setDragActive(false);
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  {applicationData.cv ? (
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-medium">{applicationData.cv.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(applicationData.cv.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange('cv', null)}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">
                        Drag and drop your CV here, or click to browse
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Supported formats: PDF, DOC, DOCX (max 5MB)
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('cv-upload')?.click()}
                      >
                        Choose File
                      </Button>
                      <input
                        id="cv-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file);
                        }}
                        className="hidden"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>
                  Please confirm the following details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rightToWork"
                    checked={applicationData.rightToWork}
                    onCheckedChange={(checked) => handleInputChange('rightToWork', !!checked)}
                  />
                  <Label htmlFor="rightToWork" className="text-sm">
                    I confirm that I have the right to work in the UK *
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="transportAccess"
                    checked={applicationData.transportAccess}
                    onCheckedChange={(checked) => handleInputChange('transportAccess', !!checked)}
                  />
                  <Label htmlFor="transportAccess" className="text-sm">
                    I have access to reliable transport to reach the work location
                  </Label>
                </div>

                {job.accommodation?.provided && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accommodationNeeded"
                      checked={applicationData.accommodationNeeded}
                      onCheckedChange={(checked) => handleInputChange('accommodationNeeded', !!checked)}
                    />
                    <Label htmlFor="accommodationNeeded" className="text-sm">
                      I would like to use the provided accommodation
                    </Label>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="references"
                    checked={applicationData.references}
                    onCheckedChange={(checked) => handleInputChange('references', !!checked)}
                  />
                  <Label htmlFor="references" className="text-sm">
                    I can provide employment references upon request
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(`/jobs/${job.id}`)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>

          {/* Help Text */}
          <Card className="mt-8 border-secondary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-medium text-secondary mb-1">Need Help?</p>
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about this position or the application process, 
                    please contact {job.company} directly at{' '}
                    <a href={`mailto:${job.contactEmail}`} className="text-secondary hover:underline">
                      {job.contactEmail}
                    </a>
                    {job.contactPhone && (
                      <>
                        {' '}or call{' '}
                        <a href={`tel:${job.contactPhone}`} className="text-secondary hover:underline">
                          {job.contactPhone}
                        </a>
                      </>
                    )}
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplication;