import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import MockupSection from "@/components/home/MockupSection";
import About from "@/components/home/About";
import Stack from "@/components/home/Stack";
import Timeline from "@/components/home/Timeline";
import SystemsIBuild from "@/components/home/SystemsIBuild";
import Projects from "@/components/home/Projects";
import Research from "@/components/home/Research";
import Certifications from "@/components/home/Certifications";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      <Hero />
      <MockupSection />
      <About />
      <Stack />
      <Timeline />
      <SystemsIBuild />
      <Projects />
      <Research />
      <Certifications />
      <Footer />
    </main>
  );
}
