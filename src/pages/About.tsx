import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2023", title: "Pilot Program", description: "Launched initial soft skills workshops" },
    { year: "2024", title: "Trial Phase", description: "Partnered with 2-3 schools for testing" },
    { year: "2025", title: "Expansion", description: "Scaling to more Tier-2 cities" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Our <span className="text-primary">Story</span> & Vision
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Building a future where every student has access to quality soft skills education
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-12 h-12 text-primary" />
              <h2 className="text-4xl font-heading font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Orato was founded on the belief that soft skills are just as important as academic knowledge.
              We recognized a critical gap in traditional education systems – students were excelling in
              textbooks but struggling with confidence, communication, and real-world interactions. Our
              mission is to bridge this gap through experiential, hybrid learning programs that make soft
              skills practical and accessible for every student.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-12 h-12 text-secondary" />
              <h2 className="text-4xl font-heading font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To nurture confidence and creativity in every child through experiential learning. We envision
              a future where students from Tier-2 cities have equal access to world-class soft skills
              training, empowering them to succeed in an increasingly competitive world. Through our hybrid
              model, we're making quality education accessible and affordable.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Passionate educators and trainers dedicated to student success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={YAmini,Akshita,Sakshi} className="glass-card p-8 text-center hover-scale">
                <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Team Member {i}</h3>
                <p className="text-muted-foreground mb-4">Certified Trainer & Educator</p>
                <p className="text-sm text-muted-foreground">
                  Passionate about empowering students with essential life skills through innovative
                  teaching methods.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">Key milestones in our growth story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-12">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass-card p-6 hover-scale">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                          {milestone.year}
                        </h3>
                        <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-background z-10 flex-shrink-0"></div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Impact in Action</h2>
            <p className="text-muted-foreground text-lg">
              Moments from our workshops and training sessions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card p-4 hover-scale aspect-video bg-muted/20 flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
