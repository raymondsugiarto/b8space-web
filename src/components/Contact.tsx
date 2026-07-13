"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref: contactRef, isVisible: contactVisible } =
    useScrollAnimation(0.1);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hi.b8space@gmail.com",
      action: "mailto:hi.b8space@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+62 858-8812-3325",
      action: "tel:+6285888123325",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our Social Media",
      value: "",
      action: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full surface border border-card-border mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Start the Conversation
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              the Future
            </span>{" "}
            Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to accelerate your digital transformation? Connect with our
            team to explore how B8Space can help your organization transform,
            automate, and scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="gradient-card border-card-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MessageSquare className="w-5 h-5 text-accent" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Tell us about your transformation goals and our team will get
                back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="surface border-card-border focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="surface border-card-border focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Work Email
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  className="surface border-card-border focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company
                </label>
                <Input
                  placeholder="Your Company Name"
                  className="surface border-card-border focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  How can we help?
                </label>
                <Textarea
                  placeholder="Tell us about your business objectives, current challenges, and the outcomes you're targeting..."
                  rows={4}
                  className="surface border-card-border focus:ring-primary resize-none"
                />
              </div>

              <Button className="w-full gradient-primary hover:shadow-glow transition-smooth group">
                <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're exploring AI, modernizing your platforms, or
                scaling operations, our team is ready to be your technology
                partner.
              </p>
            </div>

            <div ref={contactRef} className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`gradient-card border-card-border hover:shadow-card hover:border-primary/40 transition-smooth group opacity-0 ${
                    contactVisible ? "animate-slide-in-right" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {info.description}
                        </p>
                        <a
                          href={info.action}
                          className="text-primary hover:text-primary-hover transition-fast font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Response Time */}
            <Card className="gradient-card border-card-border hover:border-primary/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Quick Response
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Our team typically responds within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
