import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BookOpen,
  Award,
  TrendingUp,
  Clock,
  Video,
  FileText,
  Gift,
  BarChart3,
} from "lucide-react";

const StudentPortal = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress reports",
    },
    {
      icon: Video,
      title: "Missed Class Replays",
      description: "Never miss a lesson - watch recorded sessions anytime",
    },
    {
      icon: FileText,
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging assessments",
    },
    {
      icon: Gift,
      title: "Rewards & Badges",
      description: "Earn points and unlock achievements as you learn",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Download your completion certificates and showcase skills",
    },
    {
      icon: BarChart3,
      title: "Performance Reports",
      description: "Downloadable reports to track your improvement",
    },
  ];

  const mockStats = [
    { label: "Courses Enrolled", value: "5" },
    { label: "Certificates Earned", value: "2" },
    { label: "Points Collected", value: "850" },
    { label: "Badges Unlocked", value: "12" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <BookOpen className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Student <span className="text-primary">Portal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Your personalized learning dashboard - Track progress, access courses, and earn rewards
          </p>
        </div>

        {/* Login Section */}
        <section className="mb-20">
          <div className="glass-card p-12 max-w-md mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Login</h2>
            <p className="text-muted-foreground mb-8 text-center">
              Access your personalized learning dashboard
            </p>

            <form className="space-y-6">
              <div>
                <Label htmlFor="student-id">Student ID / Email *</Label>
                <Input
                  id="student-id"
                  placeholder="Enter your student ID or email"
                  className="bg-input border-border"
                />
              </div>

              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="bg-input border-border"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Login to Dashboard
              </Button>

              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Dashboard Preview</h2>
            <p className="text-muted-foreground text-lg">
              See what awaits you in your personalized portal
            </p>
          </div>

          {/* Mock Stats */}
          <div className="glass-card p-12 mb-12">
            <div className="grid md:grid-cols-4 gap-8">
              {mockStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Progress Section */}
          <div className="glass-card p-12 mb-12">
            <h3 className="text-2xl font-heading font-bold mb-8">Current Courses</h3>
            <div className="space-y-6">
              {[
                { course: "Communication Skills", progress: 75 },
                { course: "Emotional Intelligence", progress: 40 },
                { course: "Public Speaking", progress: 90 },
              ].map((course, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{course.course}</span>
                    <span className="text-primary">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Portal Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need for a complete learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8 hover-scale">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentPortal;
