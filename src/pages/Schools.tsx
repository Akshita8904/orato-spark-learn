import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { School, Users, TrendingUp, Award, CheckCircle2, Calendar } from "lucide-react";

const Schools = () => {
  const { toast } = useToast();
  const [studentCount, setStudentCount] = useState(50);

  const calculateRevenue = (students: number) => {
    const perStudent = 1900; // Average of ₹1,800-₹2,000
    return students * perStudent;
  };

  const benefits = [
    {
      icon: Award,
      title: "Customized Curriculum",
      description: "Programs tailored to your school's needs and student demographics",
    },
    {
      icon: Users,
      title: "Expert Trainer Support",
      description: "Certified trainers with proven track records in soft skills education",
    },
    {
      icon: TrendingUp,
      title: "Profit Sharing Model",
      description: "Transparent revenue sharing that benefits both school and Orato",
    },
    {
      icon: CheckCircle2,
      title: "Complete Support",
      description: "From planning to execution, we handle everything seamlessly",
    },
  ];

  const process = [
    { step: "1", title: "Proposal", description: "Share your school's requirements and student count" },
    { step: "2", title: "Trial Program", description: "3-month pilot to assess fit and impact" },
    { step: "3", title: "Evaluation", description: "Comprehensive feedback from students and teachers" },
    { step: "4", title: "Annual Contract", description: "Long-term collaboration agreement" },
    { step: "5", title: "Student Kits", description: "Delivery of learning materials and activity books" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Partner with <span className="text-primary">Orato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Empower your students with essential soft skills through our proven hybrid learning model
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Why Partner With Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-8 hover-scale">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple steps to get started</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item) => (
                <div key={item.step} className="relative z-10">
                  <div className="glass-card p-6 hover-scale">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-semibold mb-2 text-center">{item.title}</h3>
                    <p className="text-muted-foreground text-sm text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profit Calculator */}
        <section className="mb-20">
          <div className="glass-card p-12 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold mb-4">Revenue Calculator</h2>
              <p className="text-muted-foreground">
                Estimate potential revenue from partnering with Orato
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="student-count" className="text-lg mb-2 block">
                  Number of Students: <span className="text-primary font-bold">{studentCount}</span>
                </Label>
                <input
                  type="range"
                  id="student-count"
                  min="20"
                  max="200"
                  step="10"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="glass-card p-8 bg-muted/50 text-center">
                <p className="text-muted-foreground mb-2">Estimated Annual Revenue</p>
                <p className="text-5xl font-heading font-bold text-primary">
                  ₹{calculateRevenue(studentCount).toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Based on ₹1,900 per student per year
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Partner Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <School className="w-12 h-12 text-primary mb-4" />
              <p className="text-muted-foreground italic mb-6">
                "Orato's program has transformed how our students communicate and present. The hybrid
                model fits perfectly with our curriculum."
              </p>
              <div>
                <p className="font-heading font-semibold">Principal Sharma</p>
                <p className="text-sm text-muted-foreground">ABC International School</p>
              </div>
            </div>

            <div className="glass-card p-8">
              <School className="w-12 h-12 text-primary mb-4" />
              <p className="text-muted-foreground italic mb-6">
                "The partnership has been seamless. Parents are extremely happy with the visible
                improvements in student confidence."
              </p>
              <div>
                <p className="font-heading font-semibold">Dr. Patel</p>
                <p className="text-sm text-muted-foreground">Excellence Public School</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="glass-card p-12 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold mb-4">Get Started Today</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will reach out within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="school-name">School Name *</Label>
                  <Input
                    id="school-name"
                    placeholder="Enter school name"
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-person">Contact Person *</Label>
                  <Input
                    id="contact-person"
                    placeholder="Principal/Coordinator name"
                    required
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="school@example.com"
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Enter city"
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="students">Number of Students *</Label>
                  <Input
                    id="students"
                    type="number"
                    placeholder="e.g., 100"
                    required
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your school and any specific requirements..."
                  rows={4}
                  className="bg-input border-border"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Book a Meeting
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Download Proposal
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Schools;
