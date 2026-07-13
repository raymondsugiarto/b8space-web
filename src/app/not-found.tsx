"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname,
    );
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-hero px-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="text-7xl md:text-8xl font-bold gradient-brand bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="mb-3 text-2xl md:text-3xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <Button
          asChild
          className="gradient-primary hover:shadow-glow transition-smooth"
        >
          <a href="/">
            <Home className="mr-2 w-4 h-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
}
