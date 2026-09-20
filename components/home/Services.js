"use client";

import CardsRotateSlider from "@/components/CardsRotateSlider";
import GradientCursiveText from "@/components/GradientCursiveText";

const services = [
  {
    poster: {
      title: "Brand Design & Identity",
      tags: "Logo design, brand identity, brand guidelines, visual language, marketing collateral, social media branding.",
    },
  },
  {
    poster: {
      title: "Performance Marketing",
      tags: "Paid social, paid search, digital campaign strategy, lead generation, conversion optimization.",
    },
  },
  {
    poster: {
      title: "UI/UX & Web Development",
      tags: "Website design, landing pages, mobile app UI, design systems, prototyping, responsive & ecommerce builds.",
    },
  },
  {
    poster: {
      title: "SEO & Content Strategy",
      tags: "Technical SEO, on-page optimization, content strategy, organic growth systems.",
    },
  },
  {
    poster: {
      title: "Creative & Content Production",
      tags: "Graphic design, motion graphics, video editing, reels & short-form content, promotional videos.",
    },
  },
  {
    poster: {
      title: "Photography & Visual Production",
      tags: "Brand photography, product photography, real estate drone videography, event coverage, cinematic visuals.",
    },
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black">
      <div className="px-[6vw] pt-24 pb-12 text-center">
        <h2 className="font-black text-white text-4xl leading-tight ">
          A full-stack growth <GradientCursiveText>operating system.</GradientCursiveText> 
        </h2>
        <p className="text-white/60 text-[1.1vw] mt-4 max-md:text-[3.2vw]">
          Everything a modern brand needs to scale, under one roof.
        </p>
      </div>

      <CardsRotateSlider
        images={services}
        rotationAmount={1.1}
        verticalDrift={1.2}
        perspective={1000}
        showCaptions={false}
      />
    </section>
  );
}