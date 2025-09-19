import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Smartphone, Star, Users } from "lucide-react";
import heroMobileApp from "@/assets/hero-mobile-app.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-[url('/src/assets/hero-bg-pattern.jpg')] bg-cover bg-center opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                #1 PM Internship Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find Your Perfect
                <span className="block gradient-text">
                  PM Internship
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
                Our AI-powered recommendation engine matches you with the best Product Management internships based on your skills, interests, and career goals.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5K+</div>
                <div className="text-white/80">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-white/80">Match Rate</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                <Smartphone className="w-5 h-5 mr-2" />
                Download App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
          
          {/* Right Column - Mobile App Preview */}
          <div className="relative animate-float">
            <Card className="overflow-hidden shadow-strong transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src={heroMobileApp} 
                alt="PM Internship Recommendation App Interface"
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-bounce">
              <div className="text-white font-semibold">AI Match: 98%</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-pulse">
              <div className="text-white font-semibold">+50 New Matches</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 fill-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;