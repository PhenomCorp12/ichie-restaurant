"use client";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MenuSection from "@/components/menu-section";
import HoursSection from "@/components/hours-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <HoursSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
