import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Award, BookOpen, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Home = () => {
  const programs = [
    {
      icon: MessageCircle,
      title: "Communication Skills",
      description: "Master effective communication for academic and personal success",
    },
    {
      icon: Users,
      title: "Public Speaking",
      description: "Build confidence in presenting ideas and speaking to audiences",
    },
    {
      icon: Award,
      title: "Emotional Intelligence",
      description: "Develop self-awareness and empathy for better relationships",
    },
    {
      icon: Target,
      title: "Teamwork & Leadership",
      description: "Learn collaboration and leadership skills for future success",
    },
  ];

  const features = [
    { title: "Hybrid Learning Model", description: "Combine offline workshops with online courses" },
    { title: "Certified Trainers", description: "Expert educators with proven track records" },
    { title: "Reward-Based Learning", description: "Gamified approach with certificates and badges" },
    { title: "School Partnerships", description: "Seamless integration with school curricula" },
    { title: "Affordable Plans", description: "Flexible pricing for schools and individuals" },
  ];

  const testimonials = [
    {
      name: "Principal Sharma",
      role: "ABC International School",
      quote: "Orato's program transformed our students' confidence and communication abilities.",
    },
    {
      name: "Mrs. Patel",
      role: "Parent",
      quote: "My daughter's presentation skills improved dramatically after joining Orato.",
    },
    {
      name: "Rahul, Class 9",
      role: "Student",
      quote: "The workshops are fun and I learned how to speak without being nervous!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Confident students learning soft skills"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-up">
            Soft Skills that Build
            <br />
            <span className="text-primary">Confidence, Communication</span>
            <br />
            <span className="text-secondary">& Character</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Hybrid learning programs designed for Classes 6–10
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link to="/schools">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Book a Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted text-lg px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-card p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To make soft skills practical & accessible for every student. We believe in nurturing
            confidence and creativity through experiential learning that prepares students for
            tomorrow's challenges.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            {["Confidence", "Communication", "Character"].map((trait) => (
              <div key={trait} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
                <span className="text-foreground font-semibold">{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Our Programs</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive skill development across key domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-scale cursor-pointer group"
            >
              <program.icon className="w-12 h-12 text-primary mb-4 group-hover:text-secondary transition-colors" />
              <h3 className="text-xl font-heading font-semibold mb-3">{program.title}</h3>
              <p className="text-muted-foreground text-sm">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/programs">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore All Programs
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Orato */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Why Choose Orato</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-card p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-heading font-bold text-primary mb-2">2-3</div>
              <p className="text-muted-foreground">Partner Schools</p>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-secondary mb-2">100+</div>
              <p className="text-muted-foreground">Students Impacted</p>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-primary mb-2">₹60K</div>
              <p className="text-muted-foreground">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">What People Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8">
              <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-heading font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-card p-12 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of students building their confidence and skills with Orato
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schools">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Partner With Us
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
