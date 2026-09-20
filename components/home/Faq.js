"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How is DIGIFLOWORX different from a typical agency?",
    a: "We don't sell one-off deliverables. You get one integrated system — brand, content, performance marketing, and web — built to work together toward a single growth number.",
  },
  {
    id: "item-2",
    q: "How fast can we get started?",
    a: "Most engagements kick off within 1–2 weeks of your Discovery call.",
  },
  {
    id: "item-3",
    q: "Do you work with early-stage founders?",
    a: "Yes — we work with startups, SMBs, established brands, and creators at every stage.",
  },
  {
    id: "item-4",
    q: "What industries do you specialize in?",
    a: "We work across DTC, SaaS, real estate, and personal/creator brands, applying the same growth-system approach to each.",
  },
  {
    id: "item-5",
    q: "Can I scale my plan up or down?",
    a: "Yes, plans are month-to-month and built to grow with you.",
  },
];

export default function Faq() {
  return (
    <section id="faq" data-slot="faq" className="bg-black py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 border-y border-white/10 md:grid-cols-2 md:border-x">
        <div
          data-slot="faq-intro"
          className="flex flex-col gap-4 border-b border-white/10 px-6 pt-12 pb-6 md:border-b-0 md:border-e md:px-10 md:py-16"
        >
          <h2 className="text-4xl font-medium leading-[1.04] tracking-tight text-white md:text-5xl">
            Questions? Answered.
          </h2>
          <p className="max-w-sm text-sm text-white/50">
            The things people ask most often. Still stuck? Reach out and we&apos;ll
            walk you through it.
          </p>
        </div>

        <div data-slot="faq-list" className="flex flex-col justify-center px-6 py-4 md:px-8">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
            {FAQS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}