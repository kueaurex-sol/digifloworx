"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

const LEFT_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  // { label: "Our Clients", href: "/#our-clients" },
];

const RIGHT_LINKS = [
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Faq", href: "/#faq" },
  // { label: "Pricing", href: "/#pricing" },
  { label: "Contact Us", href: "/#contact-us" },
];

const EASE = [0.22, 1, 0.36, 1];

const EXPANDED_WIDTH = "min(80vw, 1180px)";
const COMPRESSED_WIDTH = "232px";
const MOBILE_WIDTH = "auto";

export default function Navbar() {
  const [compressed, setCompressed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);

  // Track viewport so mobile can ignore the scroll-driven compress/expand
  // logic entirely and just stay sized to the logo.
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (Math.abs(delta) > 4) {
          if (delta > 0 && currentY > 80) {
            setCompressed(true);
          } else if (delta < 0) {
            setCompressed(false);
          }
          lastScrollY.current = currentY;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links only ever show on desktop, and only when not compressed there.
  const showLinks = !isMobile && !compressed;

  return (
    <motion.nav
      animate={{
        width: isMobile ? MOBILE_WIDTH : compressed ? COMPRESSED_WIDTH : EXPANDED_WIDTH,
        paddingLeft: isMobile ? 22 : compressed ? 18 : 40,
        paddingRight: isMobile ? 22 : compressed ? 18 : 40,
        paddingTop: isMobile ? 10 : compressed ? 10 : 18,
        paddingBottom: isMobile ? 10 : compressed ? 10 : 18,
      }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2 overflow-hidden rounded-full border border-white/15 bg-black/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
    >
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-6">
        <AnimatePresence>
          {showLinks && (
            <motion.div
              key="left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.35, delay: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="flex items-center justify-start gap-9"
            >
              {LEFT_LINKS.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <a href="#hero" className="col-start-2 flex shrink-0 items-center justify-center">
          <Image
            src="/digifloworx-logo-navbar.png"
            alt="Digifloworx"
            width={160}
            height={52}
            priority
            className="h-6 w-auto"
          />
        </a>

        <AnimatePresence>
          {showLinks && (
            <motion.div
              key="right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.35, delay: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="flex items-center justify-end gap-9"
            >
              {RIGHT_LINKS.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}