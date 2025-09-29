import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Digitalization Advisory",
      description: "Strategic consulting to transform your business processes with cutting-edge digital solutions and modern technology stacks.",
      features: ["Digital Strategy", "Process Optimization", "Technology Roadmap", "Change Management"]
    },
    {
      icon: Code2,
      title: "Application Development",
      description: "Custom software development with modern frameworks and technologies, delivering scalable and maintainable solutions.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Microservices"]
    }
  ];

  const technologies = [
    { icon: Database, name: "Database Solutions" },
    { icon: Cloud, name: "Cloud Architecture" },
    { icon: Smartphone, name: "Mobile Development" },
    { icon: Shield, name: "Security & Compliance" }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions with our expert engineering team, 
            delivering end-to-end services to accelerate your business transformation.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card border-card-border hover:shadow-card transition-smooth group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="group border-card-border hover:surface-hover transition-smooth">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-foreground">
            Technologies We Master
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 surface rounded-xl border border-card-border hover:surface-hover transition-smooth group"
              >
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3 group-hover:shadow-glow transition-smooth">
                  <tech.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;