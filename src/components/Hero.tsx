import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image - Fullscreen (100vw x 100vh) */}
      <div
        className="absolute inset-0 w-screen h-screen bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('/hero-3.jpg')",
        }}
      />

      {/* Gradient Overlay - Light theme wash over hero image */}
      <div className="absolute inset-0 gradient-hero opacity-40 z-10" />

      {/* Decorative Brand Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-card-border shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Empowering Digital Advancement
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Transform. Automate.</span>
            <br />
            <span className="gradient-brand bg-clip-text text-transparent">
              Scale.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            B8Space partners with enterprises to accelerate digital
            transformation through AI, software engineering, automation, and
            scalable technology solutions that drive sustainable business
            growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-glow transition-smooth group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-card-border hover:surface-hover transition-smooth group"
            >
              Explore Our Capabilities
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-card-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                AI-Driven
              </div>
              <div className="text-muted-foreground">
                Enterprise Intelligence
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                Future-Ready
              </div>
              <div className="text-muted-foreground">Scalable Architecture</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                Strategic
              </div>
              <div className="text-muted-foreground">
                Technology Partnership
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
