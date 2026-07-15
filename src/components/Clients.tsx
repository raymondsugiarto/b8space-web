"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type Client = { name: string; logo?: string };

const clients: Client[] = [
  { name: "SimPensiun", logo: "/clients/client-1.png" },
  { name: "JoinDiskon", logo: "/clients/client-2.jpeg" },
  { name: "Fitgloss", logo: "/clients/client-3.jpeg" },
  { name: "Astrapay", logo: "/clients/client-4.png" },
  { name: "Sicepat", logo: "/clients/client-5.svg" },
  { name: "VirtuAdd", logo: "/clients/client-6.png" },
  { name: "Bank BRI", logo: "/clients/client-7.png" },
  { name: "Raja Prospek", logo: "/clients/client-8.png" },
  { name: "Smartfren", logo: "/clients/client-9.png" },
  { name: "RodaExpress", logo: "/clients/client-10.png" },
];

const Clients = () => {
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation(0.15);

  return (
    <section id="clients" className="py-20 px-6 surface">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-card-border mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Our Clients
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Digital-First
            </span>{" "}
            Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with enterprises and growing businesses across industries
            to deliver measurable transformation, automation, and scalable
            digital outcomes.
          </p>
        </div>

        {/* Logo grid */}
        <div
          ref={logosRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group gradient-card border border-card-border rounded-xl p-6 flex items-center justify-center h-28 hover:border-primary/40 hover:shadow-card transition-smooth opacity-0 ${
                logosVisible ? "animate-slide-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.06}s` }}
              aria-label={client.name}
              title={client.name}
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={240}
                  height={80}
                  className="max-h-12 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-smooth"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
                  unoptimized
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary transition-smooth">
                  <Building2 className="w-8 h-8" />
                  <span className="text-xs font-medium text-center">
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
