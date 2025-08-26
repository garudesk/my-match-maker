import { Heart, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <Badge 
              variant="secondary" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary-foreground/90 text-primary border-primary/20"
            >
              <Crown className="w-4 h-4" />
              Trusted by 3,00,000+ Families
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Create Your Perfect
              <span className="block text-accent"> Marriage Biodata</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 max-w-lg mx-auto lg:mx-0">
              Make a Beautiful Biodata in 5 Minutes and get it Instantly. 
              Choose from elegant traditional templates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-lg px-8 py-6"
              >
                <Heart className="w-5 h-5 mr-2" />
                Create My Biodata
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
              >
                View Templates
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-primary-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">3L+</div>
                <div className="text-sm">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">5 Min</div>
                <div className="text-sm">Quick Setup</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Template preview */}
          <div className="relative">
            <div className="relative z-10 flex items-center justify-center">
              {/* Main template card */}
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant transform rotate-2 hover:rotate-0 transition-smooth">
                <div className="w-64 h-80 bg-primary/5 rounded-xl border-2 border-accent/20 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-20 h-20 bg-accent/20 rounded-full mb-4 flex items-center justify-center">
                    <Crown className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    Premium Template
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Elegant design with traditional elements
                  </p>
                  <div className="mt-4 space-y-2 w-full">
                    <div className="h-2 bg-muted rounded-full"></div>
                    <div className="h-2 bg-muted rounded-full w-3/4"></div>
                    <div className="h-2 bg-muted rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Background templates */}
              <div className="absolute -left-8 -top-8 w-48 h-64 bg-card rounded-xl shadow-lg opacity-40 transform -rotate-12"></div>
              <div className="absolute -right-8 -bottom-8 w-48 h-64 bg-card rounded-xl shadow-lg opacity-40 transform rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;