import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  BookOpen,
  Target,
  Heart,
  Users,
  Clock,
  Award,
  Gift,
  CheckCircle2,
  X,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: MessageCircle,
      title: "Soft Skills & Communication",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      description: "Master effective communication for success in all areas of life",
    },
    {
      icon: BookOpen,
      title: "Financial Literacy for Teens",
      duration: "8 weeks",
      level: "Beginner",
      description: "Learn essential money management skills for financial independence",
    },
    {
      icon: Target,
      title: "Robotics & Innovation",
      duration: "16 weeks",
      level: "Intermediate",
      description: "Hands-on technology projects and creative problem-solving",
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      duration: "10 weeks",
      level: "All Levels",
      description: "Develop self-awareness and empathy for better relationships",
    },
    {
      icon: Users,
      title: "Digital Literacy",
      duration: "6 weeks",
      level: "Beginner",
      description: "Navigate the digital world safely and effectively",
    },
    {
      icon: Clock,
      title: "Career Awareness",
      duration: "8 weeks",
      level: "All Levels",
      description: "Explore career paths and develop goal-setting skills",
    },
  ];

  const subscriptionFeatures = {
    basic: [
      "Access to all course videos",
      "Basic progress tracking",
      "Community forum access",
      "Monthly newsletters",
    ],
    premium: [
      "Everything in Basic",
      "Physical activity kits delivered home",
      "1-on-1 mentorship sessions",
      "Priority support",
      "Exclusive workshops",
      "Premium certification",
      "Downloadable resources",
      "Quarterly gifts & rewards",
    ],
  };

  const gamification = [
    {
      icon: Award,
      title: "Points & Badges",
      description: "Earn points for completing lessons and unlock achievement badges",
    },
    {
      icon: Gift,
      title: "Rewards System",
      description: "Redeem points for exciting gifts and learning materials",
    },
    {
      icon: CheckCircle2,
      title: "Certificates",
      description: "Get certified upon course completion to showcase your skills",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Learn Anytime, <span className="text-primary">Anywhere</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Access world-class soft skills training from the comfort of your home
          </p>
        </div>

        {/* Subscription Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground text-lg">Flexible options for every learner</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="glass-card p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2">Basic</h3>
                <div className="text-4xl font-bold text-primary mb-2">Free</div>
                <p className="text-muted-foreground">Perfect for getting started</p>
              </div>

              <div className="space-y-4 mb-8">
                {subscriptionFeatures.basic.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-muted text-foreground hover:bg-muted/80">
                Get Started Free
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="glass-card p-8 border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  ₹499<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">Complete learning experience</p>
              </div>

              <div className="space-y-4 mb-8">
                {subscriptionFeatures.premium.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/subscription">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Explore Our Courses</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive programs for holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="glass-card p-8 hover-scale group">
                <course.icon className="w-12 h-12 text-primary mb-6 group-hover:text-secondary transition-colors" />
                <h3 className="text-xl font-heading font-semibold mb-3">{course.title}</h3>
                <p className="text-muted-foreground mb-6">{course.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-muted hover:bg-muted/80" variant="outline">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Gamified Learning */}
        <section className="mb-20">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">Gamified Learning Experience</h2>
              <p className="text-muted-foreground text-lg">
                Make learning fun with rewards, badges, and certificates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {gamification.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Portal CTA */}
        <section>
          <div className="glass-card p-12 text-center">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Access Your Dashboard</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Already enrolled? Log in to continue your learning journey
            </p>
            <Link to="/student-portal">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Student Login
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
