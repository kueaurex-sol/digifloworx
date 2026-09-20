"use client";

import { useEffect, useState } from "react";
import GlyphPortal from "@/components/GlyphPortal";

const settings = { word: "GROWTH", scrollLength: 2.4, interactive: true, annotations: false };
const family = '"Glyph Portal Jakarta", Arial, sans-serif';
let fontLoad;

export default function ProcessSection(props) {
  const s = { ...settings, ...props };
  const [face, setFace] = useState(null);

  useEffect(() => {
    let settled = false;
    const finish = (value) => { if (!settled) { settled = true; setFace(value); } };
    fontLoad ??= new FontFace("Glyph Portal Jakarta", 'url("https://cdn.21st.dev/assets/mirror/15/153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79.woff2")', { weight: "400 700" })
      .load().then((font) => { document.fonts.add(font); });
    const timeout = window.setTimeout(() => finish("Arial, sans-serif"), 1600);
    void fontLoad.then(() => finish(family), () => finish("Arial, sans-serif"));
    return () => { settled = true; clearTimeout(timeout); };
  }, []);

  return (
    <div id="process" data-demo-scroll data-process-demo tabIndex={0} role="region" aria-label="Four steps to predictable growth. Scroll to step inside."
      style={{ width: "100%", height: "min(720px, 100svh)", overflowY: "auto", background: "#000", containerType: "inline-size", fontFamily: face ?? "Arial, sans-serif" }}>
      <style>{`
        [data-process-demo] [data-gp-caption]{inset:calc(var(--gp-word-bottom,50%) + 82px) 24px auto;justify-content:center;}
        [data-process-demo] [data-gp-hint]{display:none;}
        [data-process-demo] [data-gp-enter]{min-height:46px;padding:0 20px;gap:28px;background:#2a0008;border:1px solid #1a0005;border-radius:10px;color:#fff;font-size:13px;font-weight:500;box-shadow:0 1px 2px #1a00051a;transition:background .18s,box-shadow .18s;}
        [data-process-demo] [data-gp-enter]:hover{background:#4a0010;box-shadow:0 3px 8px #1a000518;}
        [data-process-demo] [data-gp-enter]:focus-visible{outline:2px solid #FF0020;outline-offset:4px;}
        [data-process-demo] [data-gp-touch-picker]{top:auto;bottom:18px;left:50%;}
        [data-process-demo] [data-gp-select]{border-color:transparent;border-radius:8px;font-size:12px;color:rgba(255,255,255,.65);}
        [data-process-header]{position:absolute;inset:clamp(24px,4.5cqw,48px) clamp(24px,5cqw,64px) auto;display:flex;align-items:center;justify-content:space-between;gap:20px;}
        [data-process-logo]{font-size:19px;font-weight:700;letter-spacing:-.03em;color:#ffffff;}
        [data-process-logo] span{color:#FF0020;}
        [data-process-category]{font-size:12px;line-height:1.5;color:rgba(255,255,255,.55);}
        [data-process-eyebrow]{position:absolute;inset:auto 24px calc(100% - var(--gp-word-top,35%) + 32px);margin:0;text-align:center;font-size:13px;font-weight:400;line-height:1.5;letter-spacing:.005em;color:rgba(255,255,255,.55);}
        [data-process-support]{position:absolute;inset:calc(var(--gp-word-bottom,50%) + 32px) 24px auto;margin:0;text-align:center;font-size:16px;font-weight:400;line-height:1.5;color:rgba(255,255,255,.8);}
        [data-process-scroll]{position:absolute;inset:auto 24px 7%;text-align:center;color:rgba(255,255,255,.45);font-size:11px;letter-spacing:.01em;}
        @media(any-pointer:coarse){[data-process-scroll]{bottom:13%;}}
        @container(max-width:450px){[data-process-category]{max-width:12ch;text-align:right;}[data-process-eyebrow]{font-size:12px;}[data-process-support]{font-size:14px;}[data-process-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 76px);}}
        @container(max-height:479px){[data-process-header]{top:18px;}[data-process-support]{top:calc(var(--gp-word-bottom,50%) + 16px);}[data-process-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 60px);}[data-process-scroll]{display:none;}}
        [data-process-demo] [data-gp-content]{padding:5.5rem clamp(1.25rem,5cqw,5rem) 6.5rem;font-family:inherit;}
        [data-process-demo] section,[data-process-demo] [data-gp-caption]{font-family:inherit;}
        [data-process-copy]{display:flex;width:min(100%,80rem);margin:auto;flex-direction:column;align-items:flex-start;gap:clamp(2rem,5svh,3.5rem);}
        [data-process-copy] h2{max-width:48rem;margin:0;color:inherit;font-size:clamp(1.75rem,1.1rem + 2.1cqw,2.25rem);font-weight:400;line-height:1.25;letter-spacing:0;text-wrap:balance;}
        [data-process-features]{display:grid;width:100%;grid-template-columns:1fr;gap:1.75rem;}
        [data-process-feature]{border-top:1px solid rgba(255,255,255,.22);padding-top:1.1rem;}
        [data-process-feature] h3{margin:0;color:inherit;font-size:1.125rem;font-weight:500;line-height:1.2;letter-spacing:0;}
        [data-process-feature] p{margin:.55rem 0 0;color:rgba(255,255,255,.85);font-size:.9375rem;line-height:1.55;}
        [data-process-no]{display:inline-block;margin-right:.7rem;color:#FF0020;font:600 .75rem ui-monospace,monospace;letter-spacing:.08em;transform:translateY(-.1em);}
        @container(min-width:640px){[data-process-features]{grid-template-columns:repeat(2,minmax(0,1fr));gap:2.5rem;}}
        @container(min-width:1024px){[data-process-features]{grid-template-columns:repeat(4,minmax(0,1fr));gap:2.5rem;}}
      `}</style>
      {face ? (
        <GlyphPortal
          word={s.word}
          fontFamily={face}
          fontWeight={700}
          style={{ fontFamily: face }}
          scrollLength={s.scrollLength}
          interactive={s.interactive}
          annotations={s.annotations}
          enterLabel="See the process"
          front={
            <>
              <div data-process-header>
                {/* <span data-process-logo>Digi floworx<span>.</span></span> */}
                {/* <span data-process-category>Process — Predictable Growth</span> */}
              </div>
              <p data-process-eyebrow>Process — "Four steps to predictable growth"</p>
              <p data-process-support>Four steps to predictable growth.</p>
              <span data-process-scroll>Scroll to see how ↓</span>
            </>
          }
        >
          <div data-process-copy>
            <h2>Four steps to predictable growth.</h2>
            <div data-process-features>
              <div data-process-feature>
                <h3><span data-process-no>01</span>Discover</h3>
                <p>We dig into your brand, your audience, your competitors, and where the real growth gaps are.</p>
              </div>
              <div data-process-feature>
                <h3><span data-process-no>02</span>Design</h3>
                <p>We build the strategy and creative direction — brand system, funnel, and content, all mapped to one goal.</p>
              </div>
              <div data-process-feature>
                <h3><span data-process-no>03</span>Build &amp; Launch</h3>
                <p>Websites, campaigns, and content go live. Every asset is built to convert, not just to look good.</p>
              </div>
              <div data-process-feature>
                <h3><span data-process-no>04</span>Scale</h3>
                <p>We track, test, and optimize continuously — doubling down on what's working and cutting what isn't.</p>
              </div>
            </div>
          </div>
        </GlyphPortal>
      ) : (
        <div role="status" style={{ height: "100%", display: "grid", placeItems: "center", color: "#aaa", fontSize: 12 }}>
          Loading type…
        </div>
      )}
    </div>
  );
}