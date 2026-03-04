import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import MockupSection from "@/components/home/MockupSection";
import About from "@/components/home/About";
import Expertise from "@/components/home/Expertise";
import Timeline from "@/components/home/Timeline";
import Projects from "@/components/home/Projects";
import Research from "@/components/home/Research";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      <Hero />
      <MockupSection />
      <About />
      <Expertise />
      <Timeline />
      <Projects />
      <Research />
      <Footer />
    </main>
  );
}
