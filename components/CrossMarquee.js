"use client";

const PLACEHOLDER_CLIENTS = [
  { name: "Client One" },
  { name: "Client Two" },
  { name: "Client Three" },
  { name: "Client Four" },
  { name: "Client Five" },
  { name: "Client Six" },
];

const REPEAT = 6;

function MarqueeRow({ items, direction = "left", speed = 30 }) {
  const base = Array.from({ length: REPEAT }, () => items).flat();
  const doubled = [...base, ...base];

  return (
    <div
      className={`flex w-max items-center [animation-play-state:running] group-hover:[animation-play-state:paused] ${
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
      }`}
      style={{ animationDuration: `${speed}s` }}
    >
      {doubled.map((client, i) => (
        <div key={`${client.name}-${i}`} className="mx-4 flex shrink-0 items-center justify-center sm:mx-6 md:mx-10">
          {client.src ? (
            <img
              src={client.src}
              alt={client.name}
              className="h-5 w-auto object-contain brightness-0 invert opacity-90 sm:h-7 md:h-9"
            />
          ) : (
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-black sm:text-base md:text-xl">
              {client.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CrossMarquee({ clients = PLACEHOLDER_CLIENTS, speed = 28 }) {
  return (
    <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden bg-black sm:h-[300px] md:h-[380px] lg:h-[460px]">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation-name: marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee-right {
          animation-name: marquee-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div
        className="group absolute left-1/2 top-1/2 overflow-hidden bg-[#FF0020] py-4 shadow-[0_0_40px_-4px_rgba(255,0,32,0.6)] sm:py-7 md:py-10"
        style={{ width: "220vw", transform: "translate(-50%, -50%) rotate(-4deg)" }}
      >
        <MarqueeRow items={clients} direction="left" speed={speed} />
      </div>

      <div
        className="group absolute left-1/2 top-1/2 overflow-hidden bg-[#FF0020] py-4 shadow-[0_0_40px_-4px_rgba(255,0,32,0.6)] sm:py-7 md:py-10"
        style={{ width: "220vw", transform: "translate(-50%, -50%) rotate(4deg)" }}
      >
        <MarqueeRow items={clients} direction="right" speed={speed} />
      </div>
    </div>
  );
}