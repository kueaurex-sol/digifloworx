"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "World-class creative meets ruthless analytics. That combo is rare and it works.",
    by: "Founder, DTC Brand",
  },
  {
    tempId: 1,
    testimonial:
      "DIGIFLOWORX didn't just redesign our site, they rebuilt how we think about growth.",
    by: "Founder, SaaS Startup",
  },
  {
    tempId: 2,
    testimonial:
      "First agency that actually ties creative decisions back to revenue.",
    by: "CEO, Real Estate Group",
  },
  {
    tempId: 3,
    testimonial:
      "We went from guessing to a system that tells us exactly what's working, every week.",
    by: "Marketing Lead, Fitness Brand",
  },
  {
    tempId: 4,
    testimonial:
      "The brand felt like us for the first time. And the numbers backed it up within a month.",
    by: "Co-Founder, Beauty Startup",
  },
  {
    tempId: 5,
    testimonial:
      "Fast, sharp, and refreshingly honest about what wasn't working before.",
    by: "COO, Home Services Co.",
  },
  {
    tempId: 6,
    testimonial:
      "Our funnel finally makes sense. Every asset has a job, and we can see it doing that job.",
    by: "Growth Manager, EdTech",
  },
  {
    tempId: 7,
    testimonial:
      "It's rare to find a team that's equally good at strategy and execution. DIGIFLOWORX is both.",
    by: "Founder, Creator Brand",
  },
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 text-white border-[#FF0020]"
          : "z-0 bg-black text-white border-white/15 hover:border-[#FF0020]/60"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        background: isCenter
          ? "radial-gradient(ellipse 140% 120% at 20% -10%, #FF0020 0%, #a3001a 25%, #5c0010 48%, #240006 70%, #000000 100%)"
          : undefined,
        boxShadow: isCenter
          ? "0px 8px 0px 4px rgba(255,0,32,0.35)"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-white/15"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <h3
        className={cn(
          "text-base sm:text-xl font-medium",
          isCenter ? "text-white" : "text-white/90"
        )}
      >
        &quot;{testimonial.testimonial}&quot;
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-white/80" : "text-white/50"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [isPaused, setIsPaused] = useState(false);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleMove(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonialsList, isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ height: 600 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
       {testimonialsList.map((testimonial, index) => {
         const position = testimonialsList.length % 2
           ? index - (testimonialsList.length + 1) / 2
           : index - testimonialsList.length / 2;
         return (
           <TestimonialCard
             key={testimonial.tempId}
             testimonial={testimonial}
             handleMove={handleMove}
             position={position}
             cardSize={cardSize}
           />
         );
       })}
       <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
         <button
           onClick={() => handleMove(-1)}
           className={cn(
             "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
             "bg-black border-2 border-white/15 text-white hover:bg-[#FF0020] hover:border-[#FF0020]",
             "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0020] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
           )}
           aria-label="Previous testimonial"
         >
           <ChevronLeft />
         </button>
         <button
           onClick={() => handleMove(1)}
           className={cn(
             "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
             "bg-black border-2 border-white/15 text-white hover:bg-[#FF0020] hover:border-[#FF0020]",
             "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0020] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
           )}
           aria-label="Next testimonial"
         >
           <ChevronRight />
         </button>
       </div>
     </div>
   );
 };
