import { Button } from "@/components/ui/button";
import { Gift, Package, Award, Users, CheckCircle2, Sparkles } from "lucide-react";

const Subscription = () => {
  const benefits = [
    {
      icon: Package,
      title: "Home Delivery of Activity Kits",
      description: "Receive physical learning materials and hands-on activity kits delivered to your doorstep",
    },
    {
      icon: Users,
      title: "Exclusive Workshops",
      description: "Access to premium workshops and live sessions with expert trainers",
    },
    {
      icon: Award,
      title: "Premium Certification",
      description: "Enhanced certificates with detailed skill assessments recognized nationwide",
    },
    {
      icon: Sparkles,
      title: "1-on-1 Mentorship",
      description: "Personalized guidance from certified mentors to accelerate your growth",
    },
  ];

  const giftExamples = [
    "Educational Board Games",
    "Skill Development Workbooks",
    "Creative Art & Craft Kits",
    "Branded Stationery Sets",
    "Inspirational Books",
    "Learning Journals",
  ];

  const plans = [
    {
      name: "Monthly",
      price: "₹499",
      period: "/month",
      savings: null,
    },
    {
      name: "Quarterly",
      price: "₹1,299",
      period: "/3 months",
      savings: "Save ₹198",
      popular: true,
    },
    {
      name: "Annual",
      price: "₹4,999",
      period: "/year",
      savings: "Save ₹989",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Join the Orato <span className="text-primary">Learning Club</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Get premium access to courses, exclusive workshops, and receive learning kits at your doorstep
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Premium Benefits</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need for an exceptional learning experience
            </p>
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

        {/* Pricing Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground text-lg">Flexible pricing for every budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-8 hover-scale ${
                  plan.popular ? "border-2 border-primary relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Best Value
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-4">{plan.name}</h3>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-secondary font-semibold mt-2">{plan.savings}</p>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  Subscribe Now
                </Button>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-heading font-semibold mb-4 text-center">
              All Plans Include:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Unlimited course access",
                "Activity kits delivered home",
                "Exclusive workshops",
                "Premium certifications",
                "1-on-1 mentorship sessions",
                "Priority customer support",
                "Downloadable resources",
                "Community forum access",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Preview */}
        <section>
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold mb-4">Exclusive Learning Kits & Gifts</h2>
              <p className="text-muted-foreground text-lg">
                Premium subscribers receive curated activity kits every quarter
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {giftExamples.map((gift, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-scale bg-muted/50 aspect-square flex items-center justify-center text-center"
                >
                  <div>
                    <Package className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="font-heading font-semibold">{gift}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8 text-sm">
              * Gift items may vary based on availability and subscription plan
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Subscription;
