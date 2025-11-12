import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Users,
  Heart,
  Target,
  Clock,
  BookOpen,
  Download,
  CheckCircle2,
} from "lucide-react";

const Programs = () => {
  const offlinePrograms = [
    {
      step: "1",
      title: "3-Month Trial",
      description: "Initial pilot program to assess student engagement and learning outcomes",
    },
    {
      step: "2",
      title: "Feedback & Evaluation",
      description: "Comprehensive review with school administration and parents",
    },
    {
      step: "3",
      title: "Annual Collaboration",
      description: "Long-term partnership with customized curriculum integration",
    },
    {
      step: "4",
      title: "Books & Kits",
      description: "Physical learning materials and activity kits for hands-on learning",
    },
    {
      step: "5",
      title: "Revenue Sharing",
      description: "Transparent profit-sharing model benefiting both school and Orato",
    },
  ];

  const onlinePrograms = [
    {
      icon: MessageCircle,
      title: "Soft Skills & Communication",
      description: "Master verbal and non-verbal communication for academic and social success",
      features: ["Public Speaking", "Active Listening", "Presentation Skills"],
    },
    {
      icon: BookOpen,
      title: "Financial Literacy for Teens",
      description: "Essential money management skills for young minds",
      features: ["Budgeting Basics", "Saving Strategies", "Smart Spending"],
    },
    {
      icon: Target,
      title: "Robotics & Innovation",
      description: "Hands-on technology and creative problem-solving",
      features: ["Basic Robotics", "Design Thinking", "Innovation Projects"],
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Develop self-awareness and empathy for better relationships",
      features: ["Self-Regulation", "Empathy Building", "Social Skills"],
    },
    {
      icon: Users,
      title: "Digital Literacy",
      description: "Navigate the digital world safely and effectively",
      features: ["Online Safety", "Digital Tools", "Cyber Awareness"],
    },
    {
      icon: Clock,
      title: "Career Awareness",
      description: "Explore career paths and develop goal-setting skills",
      features: ["Career Exploration", "Goal Setting", "Time Management"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Skill Development <span className="text-primary">Tracks</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive offline and online programs designed to build essential life skills
          </p>
        </div>

        {/* Offline Programs Section */}
        <section className="mb-20">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Offline Programs
                <span className="block text-2xl text-muted-foreground font-normal mt-2">
                  School Collaboration Model
                </span>
              </h2>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {offlinePrograms.map((program) => (
                <div key={program.step} className="relative">
                  <div className="glass-card p-6 hover-scale h-full">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      {program.step}
                    </div>
                    <h3 className="font-heading font-semibold mb-3 text-lg">{program.title}</h3>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing & CTA */}
            <div className="text-center glass-card p-8 bg-muted/50">
              <div className="mb-6">
                <p className="text-2xl font-heading font-bold text-primary mb-2">
                  ₹1,800 – ₹2,000
                </p>
                <p className="text-muted-foreground">per student annually</p>
              </div>
              <Link to="/schools">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book a Trial Program
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Online Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Online Programs
              <span className="block text-2xl text-muted-foreground font-normal mt-2">
                Learn Anytime, Anywhere
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlinePrograms.map((program, index) => (
              <div key={index} className="glass-card p-8 hover-scale group">
                <program.icon className="w-12 h-12 text-primary mb-6 group-hover:text-secondary transition-colors" />
                <h3 className="text-2xl font-heading font-semibold mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>

                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/courses">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                View Course Details
              </Button>
            </Link>
          </div>
        </section>

        {/* Download Section */}
        <section>
          <div className="glass-card p-12 text-center">
            <Download className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Download Program Brochure</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get detailed information about all our programs, pricing, and curriculum in a
              comprehensive PDF brochure
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure (PDF)
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
