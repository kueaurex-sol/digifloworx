export default function ServicePoster({ index, title, tags }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col justify-between p-[5%]">
      {/* Glowing red blobs, echoing the reference posters */}
      <div className="pointer-events-none absolute -top-[25%] -left-[20%] w-[75%] h-[75%] rounded-full bg-[radial-gradient(circle,#FF2828_0%,#3a0000_55%,transparent_75%)] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,#FF2828_0%,#2a0000_55%,transparent_75%)] blur-3xl opacity-70" />

      {/* Top row: logo + index */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="font-black leading-[0.95] text-white text-[1.3vw] max-md:text-[3.4vw] tracking-tight">
          Digi
          <br />
          floworx<span className="text-[#FF2828]">.</span>
        </span>
        <span className="font-mono text-white/40 text-[0.9vw] max-md:text-[2.4vw]">
          0{index + 1}
        </span>
      </div>

      {/* Title + tags */}
      <div className="relative z-10">
        <h3 className="font-black text-white text-[2.2vw] leading-[1.08] mb-[3%] max-md:text-[5vw]">
          {title}
        </h3>
        <p className="text-white/70 text-[0.95vw] leading-snug max-w-[92%] max-md:text-[2.6vw]">
          {tags}
        </p>
      </div>
    </div>
  );
}