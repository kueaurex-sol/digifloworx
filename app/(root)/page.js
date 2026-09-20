import React from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import ProcessSection from "@/components/home/ProcessSection";
import ClosingCTA from "@/components/home/ClosingCTA";
import Faq from "@/components/home/Faq";
import TestimonialsSection from "@/components/home/Testimonials";
import ClientsSection from "@/components/home/OurClients";
function Page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProcessSection />
      <ClientsSection/>
      <TestimonialsSection/>
      <Faq />
      <ClosingCTA />

    </>
  );
}

export default Page;
