import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Trophy,
  CheckCircle2
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver exceptional solutions with attention to detail and commitment to quality."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead with cutting-edge technologies and creative problem-solving approaches."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners in their digital transformation journey."
    },
    {
      icon: Trophy,
      title: "Results",
      description: "We focus on delivering measurable outcomes that drive real business value."
    }
  ];

  const achievements = [
    "Industry-leading development practices",
    "Agile and DevOps methodologies",
    "Continuous integration and deployment",
    "Scalable and maintainable code architecture",
    "24/7 technical support and maintenance"
  ];

  return (
    <section id="about" className="py-20 px-6 surface">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Our Company</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic software company driven by innovation and excellence. Our team of skilled engineers 
            combines technical expertise with business acumen to deliver transformative digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Strong Engineering Team
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Expertise That Drives Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our talented engineers bring years of experience in modern technologies and best practices. 
                We pride ourselves on staying current with the latest developments in software engineering, 
                ensuring our clients benefit from cutting-edge solutions.
              </p>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Our Core Values</h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={index} className="gradient-card border-card-border hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-card border border-card-border">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Ready to work with a dedicated team?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;