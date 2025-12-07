import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>B8Space - Cutting-Edge Software Development & Digitalization Services</title>
        <meta name="description" content="Transform your business with B8Space - expert software development, digitalization advisory, and application development services. End-to-end solutions with cutting-edge technology and skilled engineering team." />
        <meta name="keywords" content="software development, digitalization advisory, application development, technology consulting, engineering solutions, digital transformation, custom software, web development, mobile app development" />
        <meta name="author" content="B8Space" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://b8space.com/" />
        <meta property="og:title" content="B8Space - Cutting-Edge Software Development & Digitalization Services" />
        <meta property="og:description" content="Transform your business with expert software development and digitalization services. End-to-end solutions with cutting-edge technology and skilled engineering team." />
        <meta property="og:image" content="https://b8space.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="B8Space" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://b8space.com/" />
        <meta name="twitter:title" content="B8Space - Software Development & Digitalization" />
        <meta name="twitter:description" content="Expert software development and digitalization advisory services with cutting-edge technology solutions." />
        <meta name="twitter:image" content="https://b8space.com/logo.png" />
        <meta name="twitter:creator" content="@B8Space" />
      </Helmet>
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
    </>
  );
};

export default Index;
