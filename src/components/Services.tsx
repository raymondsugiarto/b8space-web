"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Brain,
  Code2,
  Workflow,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } =
    useScrollAnimation(0.1);
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Unlock intelligent decision-making and operational efficiency with AI assistants, generative AI, enterprise AI, and AI automation tailored to your business.",
      features: [
        "AI Assistants & Chatbots",
        "Generative AI Solutions",
        "Enterprise AI Integration",
        "AI-Powered Automation",
      ],
    },
    {
      icon: Code2,
      title: "Software Engineering",
      description:
        "Engineer scalable, secure, and high-performance digital products — from web and mobile applications to SaaS platforms and custom enterprise systems.",
      features: [
        "Web & Mobile Applications",
        "Enterprise Systems",
        "SaaS Platforms",
        "Custom Software",
      ],
    },
    {
      icon: Workflow,
      title: "Business Automation",
      description:
        "Streamline operations and unlock productivity through intelligent workflow automation, process optimization, and RPA solutions that scale with your business.",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "RPA Solutions",
        "Operational Efficiency",
      ],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description:
        "Turn data into a strategic advantage with business intelligence, data warehousing, dashboards, and analytics platforms that drive measurable outcomes.",
      features: [
        "Business Intelligence",
        "Data Warehousing",
        "Dashboard Development",
        "Analytics Platforms",
      ],
    },
  ];

  const technologies = [
    { icon: Cloud, name: "Cloud & Infrastructure" },
    { icon: Brain, name: "AI & Machine Learning" },
    { icon: Database, name: "Data Engineering" },
    { icon: Workflow, name: "Automation Platforms" },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full surface border border-card-border mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver end-to-end technology solutions across AI, software
            engineering, automation, data, and cloud — built to help enterprises
            transform, automate, and scale.
          </p>
        </div>

        {/* Main Services */}
        <div ref={servicesRef} className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`gradient-card border-card-border hover:shadow-card hover:border-primary/40 transition-smooth group opacity-0 ${
                servicesVisible
                  ? index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="group border-card-border hover:surface-hover hover:border-primary/50 transition-smooth"
                >
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
            Core Technology Domains
          </h3>
          <div ref={techRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 surface rounded-xl border border-card-border hover:surface-hover hover:border-primary/40 transition-smooth group opacity-0 ${
                  techVisible ? "animate-slide-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3 group-hover:shadow-glow transition-smooth">
                  <tech.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
