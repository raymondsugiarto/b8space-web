import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B8Space — AI & Digital Transformation Partner",
  description:
    "B8Space empowers organizations to accelerate digital transformation through AI, software engineering, automation, and scalable technology solutions that drive sustainable business growth.",
  keywords:
    "digital transformation, artificial intelligence, AI solutions, business automation, software engineering, cloud solutions, data analytics, enterprise technology, technology consulting, AI integration",
  authors: [{ name: "B8Space" }],
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://b8space.com/",
    title: "B8Space — Empowering Digital Advancement",
    description:
      "B8Space partners with enterprises to accelerate digital transformation through AI, software engineering, automation, and scalable technology solutions.",
    images: [
      {
        url: "https://b8space.com/logo.png",
        width: 1200,
        height: 630,
        alt: "B8Space — Empowering Digital Advancement",
      },
    ],
    siteName: "B8Space",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "B8Space — Empowering Digital Advancement",
    description:
      "B8Space partners with enterprises to accelerate digital transformation through AI, software engineering, automation, and scalable technology solutions.",
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
