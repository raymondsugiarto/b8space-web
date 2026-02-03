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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Contact our expert team to discuss your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="gradient-card border-card-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you within 24
                hours.
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
                  Email Address
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
                  Project Details
                </label>
                <Textarea
                  placeholder="Tell us about your project requirements, timeline, and goals..."
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
                Our team is ready to help you bring your digital vision to life.
                Choose the best way to reach us.
              </p>
            </div>

            <div ref={contactRef} className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`gradient-card border-card-border hover:shadow-card transition-smooth group opacity-0 ${
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
            <Card className="gradient-card border-card-border">
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
                      We typically respond within 24 hours
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
