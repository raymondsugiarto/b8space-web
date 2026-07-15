import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const OG_IMAGE = {
  url: "/logo.png",
  width: 700,
  height: 380,
  alt: "B8Space — Empowering Digital Advancement",
  type: "image/png" as const,
};

export const metadata: Metadata = {
  title: "B8Space — AI & Digital Transformation Partner",
  description:
    "B8Space empowers organizations to accelerate digital transformation through AI, software engineering, automation, and scalable technology solutions that drive sustainable business growth.",
  keywords:
    "digital transformation, artificial intelligence, AI solutions, business automation, software engineering, cloud solutions, data analytics, enterprise technology, technology consulting, AI integration",
  authors: [{ name: "B8Space" }],
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  metadataBase: new URL("https://b8space.com"),
  openGraph: {
    type: "website",
    url: "https://b8space.com/",
    title: "B8Space — Empowering Digital Advancement",
    description:
      "B8Space partners with enterprises to accelerate digital transformation through AI, software engineering, automation, and scalable technology solutions.",
    images: [OG_IMAGE],
    siteName: "B8Space",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "B8Space — Empowering Digital Advancement",
    description:
      "B8Space partners with enterprises to accelerate digital transformation through AI, software engineering, automation, and scalable technology solutions.",
    images: [OG_IMAGE.url],
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
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
