"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export function StickyFooter({ className, ...props }) {
  return (
    <footer
      className={cn("relative h-[950px] sm:h-[860px] md:h-[820px] w-full", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[950px] sm:h-[860px] md:h-[820px] w-full">
        <div className="sticky top-[calc(100vh-950px)] sm:top-[calc(100vh-860px)] md:top-[calc(100vh-820px)] h-full overflow-y-auto bg-black">
          <div
            className="relative flex size-full flex-col justify-end gap-5 border-t border-white/10 px-4 pb-6 pt-24 md:gap-8 md:px-12 md:pb-8 md:pt-8"
            style={{
              background:
                "radial-gradient(ellipse 140% 120% at 10% -10%, #FF0020 0%, #a3001a 20%, #5c0010 40%, #240006 62%, #000000 85%)",
            }}
          >
            <div aria-hidden className="absolute inset-0 isolate z-0 overflow-hidden" />

            <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-row md:gap-10">
              <AnimatedContainer className="col-span-2 w-full max-w-sm min-w-[16rem] space-y-3 md:col-span-1 md:space-y-4">
                <img loading="lazy" src="digifloworx-logo-large.png" className="mb-2 w-16 md:mb-3 md:w-20" />
                <p className="text-xs text-white/60 md:text-sm">
                  Building growth systems for ambitious brands across the globe.
                  Strategy · Creative · Technology.
                </p>

                <div className="space-y-1.5 pt-1 text-xs text-white/60 md:space-y-2 md:pt-2 md:text-sm">
                  <a href="mailto:hello@digifloworx.com" className="flex items-center gap-2 transition-colors hover:text-[#FF0020]">
                    <MailIcon className="size-3.5 shrink-0 md:size-4" /> hello@digifloworx.com
                  </a>
                  <a href="tel:" className="flex items-center gap-2 transition-colors hover:text-[#FF0020]">
                    <PhoneIcon className="size-3.5 shrink-0 md:size-4" /> Add phone number
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="size-3.5 shrink-0 md:size-4" /> Hyderabad, Telangana, India
                  </div>
                </div>

                <div className="flex gap-2 pt-1 md:pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      aria-label={link.title}
                      className="flex size-7 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-[#FF0020] hover:text-[#FF0020] md:size-8"
                    >
                      <link.icon className="size-3.5 md:size-4" />
                    </a>
                  ))}
                </div>
              </AnimatedContainer>

              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full md:w-full">
                  <div>
                    <h3 className="text-[10px] uppercase tracking-wide text-white md:text-sm">{group.label}</h3>
                    <ul className="mt-2 space-y-1.5 text-xs text-white/60 md:mt-4 md:space-y-2 md:text-xs lg:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="inline-flex items-center transition-colors duration-300 hover:text-[#FF0020]"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}

              <AnimatedContainer delay={0.5} className="col-span-2 w-full max-w-xs md:col-span-1">
                <h3 className="text-[10px] uppercase tracking-wide text-white md:text-sm">Newsletter</h3>
                <p className="mt-2 text-xs text-white/60 md:mt-4 md:text-sm">
                  Growth tips and case studies, straight to your inbox.
                </p>
                <div className="mt-3 md:mt-4">
                  <NewsletterForm />
                </div>
              </AnimatedContainer>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-white/50 md:flex-row md:text-sm">
              <p>© 2026 DIGIFLOWORX. All rights reserved.</p>
              <div className="flex gap-3 md:gap-4">
                <a href="#" className="hover:text-[#FF0020]">Privacy Policy</a>
                <a href="#" className="hover:text-[#FF0020]">Terms of Service</a>
                <a href="#" className="hover:text-[#FF0020]">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
const socialLinks = [
  { title: "Instagram", href: "#", icon: InstagramIcon },
  { title: "Facebook", href: "#", icon: FacebookIcon },
  { title: "Twitter/X", href: "#", icon: TwitterIcon },
  { title: "LinkedIn", href: "#", icon: LinkedinIcon },
  { title: "YouTube", href: "#", icon: YoutubeIcon },
];

const footerLinkGroups = [
  {
    label: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    label: "Services",
    links: [
      { title: "Performance Marketing", href: "#" },
      { title: "Branding", href: "#" },
      { title: "SEO", href: "#" },
      { title: "Web Development", href: "#" },
      { title: "Content Studio", href: "#" },
    ],
  },
];

function AnimatedContainer({ delay = 0.1, children, className, ...props }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}