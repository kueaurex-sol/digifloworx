export default function GradientCursiveText({ children }) {
  return (
    <span className="group relative inline-block cursor-pointer">
      <span
        className="italic bg-gradient-to-r from-[#FF2828] via-[#D83030] to-[#8E2A26] bg-clip-text text-transparent animate-gradient-text"
        style={{
          fontFamily: "var(--font-cursive)",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>

      <span
        aria-hidden
        className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-[#FF2828] via-[#D83030] to-[#8E2A26] transition-all duration-500 ease-out group-hover:w-full"
      />
    </span>
  );
}