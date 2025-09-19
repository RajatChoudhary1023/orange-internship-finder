import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Zap, Shield, Globe, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our advanced machine learning algorithm analyzes your profile, skills, and preferences to find the perfect PM internship matches with 95% accuracy.",
    badge: "Smart AI"
  },
  {
    icon: Target,
    title: "Personalized Recommendations",
    description: "Get tailored internship suggestions based on your career goals, preferred industry, location, and skill level. No more endless scrolling through irrelevant listings.",
    badge: "Personalized"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Stay ahead with instant notifications about new internship opportunities, application deadlines, and status updates. Never miss an opportunity again.",
    badge: "Lightning Fast"
  },
  {
    icon: Shield,
    title: "Verified Opportunities",
    description: "All internships are vetted and verified by our team. We ensure every opportunity is legitimate, offering real value and learning experience.",
    badge: "Trusted"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access internships from startups to Fortune 500 companies worldwide. Expand your horizons with remote and on-site opportunities.",
    badge: "Worldwide"
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Get mentorship, skill assessments, and career guidance. Our platform doesn't just find internships – it accelerates your PM career journey.",
    badge: "Growth"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-orange-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600">
            Why Choose Our Platform
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Features That Make The
            <span className="gradient-text"> Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of internship discovery with our cutting-edge features designed specifically for aspiring Product Managers.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-orange-100/50 card-gradient"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-soft">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-medium">
            <div className="bg-white rounded-full px-8 py-4">
              <span className="gradient-text font-semibold text-lg">
                Ready to discover your perfect internship match?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;