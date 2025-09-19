import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "PM Intern at Google",
    company: "Google",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "This platform completely changed my internship search. The AI recommendations were spot-on, and I landed my dream PM internship at Google within 2 weeks!",
    highlight: "Dream internship in 2 weeks"
  },
  {
    name: "Marcus Johnson", 
    role: "Product Strategy Intern",
    company: "Microsoft",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "The personalized matching saved me countless hours. Instead of applying blindly to hundreds of positions, I focused on 5 perfect matches and got 3 offers.",
    highlight: "3 offers from 5 applications"
  },
  {
    name: "Priya Patel",
    role: "PM Intern at Spotify",
    company: "Spotify", 
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "What I love most is how the platform understood my preference for music tech. The recommendations were incredibly relevant to my interests and career goals.",
    highlight: "Perfect industry match"
  },
  {
    name: "Alex Rivera",
    role: "Product Intern at Airbnb",
    company: "Airbnb",
    avatar: "/api/placeholder/64/64", 
    rating: 5,
    text: "The real-time updates and application tracking kept me organized throughout the process. The mobile app made it easy to stay on top of opportunities.",
    highlight: "Stayed organized & updated"
  },
  {
    name: "Emma Thompson",
    role: "Growth PM Intern",
    company: "Stripe",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "Not only did I find an amazing internship, but the career guidance and resources helped me prepare for interviews and succeed in my role.",
    highlight: "Career guidance included"
  },
  {
    name: "David Kim",
    role: "PM Intern at LinkedIn",
    company: "LinkedIn",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "The platform's network effect is incredible. I connected with other interns and mentors who became valuable connections in my career journey.",
    highlight: "Built valuable network"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600">
            Student Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our
            <span className="gradient-text"> Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of successful students who landed their dream PM internships through our platform.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-orange-100/50 card-gradient overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-orange-500" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Highlight Badge */}
                <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                  {testimonial.highlight}
                </Badge>
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-orange-100">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-400 text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm font-medium text-orange-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-white rounded-2xl shadow-soft border border-orange-100">
            <div>
              <div className="text-3xl font-bold gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">4.9/5</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">2 weeks</div>
              <div className="text-sm text-muted-foreground">Avg. Match Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;