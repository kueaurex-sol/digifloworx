"use client";

import { X, CheckCircle2 } from "lucide-react";

const traditionalPoints = [
  "4+ distinct vendor invoices with zero shared accountability",
  "Creative built for vanity awards, not conversion rate",
  "Ad spend burned on broken landing page funnels",
];

const digifloworxPoints = [
  "Single unified growth partner holding holistic revenue accountability",
  "High-velocity iteration loop between media buyers and designers",
  "Proprietary conversion frameworks tested across $4.2M+ in revenue",
];

export function CompareCards() {
  return (
    <section className="bg-black px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Left — Traditional Agency Chaos */}
        <div className="rounded-2xl border border-white/10 bg-[#141414] p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Traditional Agency Chaos
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60">
              Fragmented
            </span>
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
            Disconnected silos leaking margin
          </h3>

          <p className="mb-8 text-sm leading-relaxed text-white/50 md:text-base">
            Design agency builds a branding kit that can&apos;t convert. Media
            buyers test creative disconnected from brand equity. Developers
            ship an unoptimized CMS. Result: friction, finger-pointing, and
            stalled metrics.
          </p>

          <ul className="space-y-3">
            {traditionalPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[#FF2828]" />
                <span className="text-sm text-white/70">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — DIGIFLOWORX Growth Engine */}
        <div className="rounded-2xl border border-[#FF0020]/30 bg-[#141414] p-8 shadow-[0_0_60px_-15px_rgba(255,0,32,0.35)]">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF2828]">
              Digifloworx Growth Engine
            </span>
            <span className="rounded-full bg-[#FF0020] px-3 py-1 text-xs font-medium text-white shadow-[0_0_20px_-4px_rgba(255,0,32,0.7)]">
              Unified &amp; Compounding
            </span>
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
            One cohesive loop: Design · Code · Scale
          </h3>

          <p className="mb-8 text-sm leading-relaxed text-white/60 md:text-base">
            Every font size, motion graphic, code commit, and ad headline is
            synchronized to the same north-star acquisition goal. Insights
            from ad spend feed landing page tweaks within hours.
          </p>

          <ul className="space-y-3">
            {digifloworxPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF2828]" />
                <span className="text-sm text-white/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}