import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Target, HandHeart, GraduationCap } from "lucide-react";

const CSR = () => {
  const initiatives = [
    {
      icon: BookOpen,
      title: "Free Mini-Courses",
      description: "Access to basic soft skills courses for underprivileged students at no cost",
    },
    {
      icon: GraduationCap,
      title: "Scholarship Programs",
      description: "Full scholarships for deserving students from economically weaker sections",
    },
    {
      icon: Users,
      title: "Community Workshops",
      description: "Free workshops in partnership with NGOs and community centers",
    },
    {
      icon: Target,
      title: "School Partnerships",
      description: "Subsidized programs for schools in rural and semi-urban areas",
    },
  ];

  const impact = [
    { number: "500+", label: "Students Reached" },
    { number: "10+", label: "NGO Partnerships" },
    { number: "50+", label: "Free Workshops" },
    { number: "25+", label: "Scholarships Awarded" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Heart className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Education for <span className="text-primary">Every Child</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            We believe in equal access to quality education. Our CSR initiatives ensure that every
            child, regardless of their economic background, can develop essential soft skills.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Our CSR Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Orato, we're committed to breaking down barriers to education. Through our Corporate
              Social Responsibility initiatives, we provide free and subsidized soft skills training
              to students who need it most. Every paid subscription helps us offer free courses to
              underprivileged children, creating a sustainable model of giving back.
            </p>
          </div>
        </section>

        {/* Initiatives */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Initiatives</h2>
            <p className="text-muted-foreground text-lg">
              How we're making a difference in communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="glass-card p-8 hover-scale">
                <initiative.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">{initiative.title}</h3>
                <p className="text-muted-foreground text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-20">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">Our Impact So Far</h2>
              <p className="text-muted-foreground text-lg">
                Growing reach, changing lives
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {impact.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Courses Section */}
        <section className="mb-20">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Free Mini-Courses</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Access essential soft skills training at no cost. These courses are designed
                specifically for students who lack access to premium education resources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {["Basic Communication", "Confidence Building", "Team Collaboration"].map((course, index) => (
                <div key={index} className="glass-card p-6 bg-muted/50 text-center">
                  <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">{course}</h3>
                  <p className="text-sm text-muted-foreground mb-4">4-week course • Free access</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Enroll Free
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="mb-20">
          <div className="glass-card p-12 text-center">
            <HandHeart className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Partner with Us</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Are you an NGO, educational trust, or corporate entity interested in sponsoring
              soft skills education for underprivileged students? Let's work together to create impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Become a Sponsor
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                Download CSR Proposal
              </Button>
            </div>
          </div>
        </section>

        {/* Support Our Mission */}
        <section>
          <div className="glass-card p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Support Our Mission</h2>
            <p className="text-muted-foreground mb-8">
              Every premium subscription you purchase helps us provide free education to a child in
              need. Join us in our mission to make quality soft skills education accessible to all.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Subscribe & Give Back
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CSR;
