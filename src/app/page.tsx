import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "B8Space - Cutting-Edge Software Development & Digitalization Services",
  description:
    "Transform your business with B8Space - expert software development, digitalization advisory, and application development services. End-to-end solutions with cutting-edge technology and skilled engineering team.",
  keywords:
    "software development, digitalization advisory, application development, technology consulting, engineering solutions, digital transformation, custom software, web development, mobile app development",
  authors: [{ name: "B8Space" }],
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://b8space.com/",
    title:
      "B8Space - Cutting-Edge Software Development & Digitalization Services",
    description:
      "Transform your business with expert software development and digitalization services. End-to-end solutions with cutting-edge technology and skilled engineering team.",
    images: [
      {
        url: "https://b8space.com/logo.png",
        width: 1200,
        height: 630,
        alt: "B8Space Logo",
      },
    ],
    siteName: "B8Space",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "B8Space - Software Development & Digitalization",
    description:
      "Expert software development and digitalization advisory services with cutting-edge technology solutions.",
    images: ["https://b8space.com/logo.png"],
    creator: "@B8Space",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
