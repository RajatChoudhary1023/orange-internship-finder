import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Search, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: User,
    number: "01",
    title: "Create Your Profile",
    description: "Tell us about your background, skills, interests, and career aspirations. Our AI learns your preferences to provide better matches.",
    color: "from-orange-500 to-orange-400"
  },
  {
    icon: Search,
    number: "02", 
    title: "AI Finds Matches",
    description: "Our recommendation engine analyzes thousands of PM internships and presents you with the most relevant opportunities based on your profile.",
    color: "from-orange-400 to-orange-300"
  },
  {
    icon: Heart,
    number: "03",
    title: "Apply & Connect",
    description: "Review your personalized matches, save favorites, and apply directly through our platform. Track your applications and get real-time updates.",
    color: "from-orange-300 to-orange-200"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600">
            Simple Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get matched with your ideal PM internship in just three simple steps. Our AI does the heavy lifting so you can focus on what matters most.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-orange-100/50">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-medium`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-6 mt-4 shadow-soft`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-orange-300" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl text-white shadow-strong">
            <div className="text-left sm:text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-white/90">Join thousands of students who found their dream PM internships</p>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 shadow-medium whitespace-nowrap">
              Start Matching Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;