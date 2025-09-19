import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone, 
  Mail, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Facebook,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-orange-50/20 border-t border-orange-100">
      {/* Newsletter Section */}
      <div className="py-16 bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Stay Updated
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Never Miss New Internship Opportunities
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Get weekly updates on new PM internships, career tips, and success stories directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button className="bg-white text-orange-600 hover:bg-white/90 shadow-medium">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold gradient-text">InternMatch</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  AI-powered platform connecting aspiring Product Managers with their dream internship opportunities worldwide.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, index) => (
                  <Button 
                    key={index}
                    size="sm" 
                    variant="outline" 
                    className="w-10 h-10 p-0 border-orange-200 hover:bg-orange-50 hover:border-orange-300"
                  >
                    <Icon className="w-4 h-4 text-orange-600" />
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Product */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Product</h4>
              <nav className="space-y-3">
                {[
                  "Features",
                  "How it Works", 
                  "Mobile App",
                  "Success Stories",
                  "Pricing",
                  "API Access"
                ].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block text-muted-foreground hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Resources</h4>
              <nav className="space-y-3">
                {[
                  "Career Guide",
                  "Interview Tips",
                  "Resume Builder",
                  "PM Resources",
                  "Help Center",
                  "Contact Support"
                ].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block text-muted-foreground hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>hello@internmatch.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              {/* Download App */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Download Our App</p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="justify-start border-orange-200 hover:bg-orange-50">
                    <Smartphone className="w-4 h-4 mr-2 text-orange-600" />
                    iOS App Store
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start border-orange-200 hover:bg-orange-50">
                    <Smartphone className="w-4 h-4 mr-2 text-orange-600" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="bg-orange-100" />
      
      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 InternMatch. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;