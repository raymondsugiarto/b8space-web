import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-100 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-70 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-foreground">
              With Digital Innovation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We're a software company that builds cutting-edge solutions with strong engineering talent, 
            providing end-to-end digitalization services to solve your business challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-smooth group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-card-border hover:surface-hover transition-smooth group"
            >
              <Code className="mr-2 w-4 h-4" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-card-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;