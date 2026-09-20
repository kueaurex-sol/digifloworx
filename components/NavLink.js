// "use client";

// export default function NavLink({ href, children }) {
//   return (
//     <a
//       href={href}
//       className="group relative inline-block cursor-pointer whitespace-nowrap text-[15px]"
//       style={{ fontFamily: "var(--font-cursive)" }}
//     >
//       {/* Default state: white cursive */}
//       <span className="relative italic text-white transition-opacity duration-500 ease-out group-hover:opacity-0">
//         {children}
//       </span>

//       {/* Hover state: red gradient cursive, fades in over the white text */}
//       <span
//         aria-hidden
//         className="pointer-events-none absolute inset-0 italic bg-gradient-to-r from-[#FF2828] via-[#D83030] to-[#8E2A26] bg-clip-text text-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
//         style={{ WebkitTextFillColor: "transparent" }}
//       >
//         {children}
//       </span>

//       {/* Progressive underline animation */}
//       <span
//         aria-hidden
//         className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#FF2828] via-[#D83030] to-[#8E2A26] transition-all duration-500 ease-out group-hover:w-full"
//       />
//     </a>
//   );
// }
"use client";

export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-block cursor-pointer whitespace-nowrap text-[19px] font-semibold leading-none"
      style={{ fontFamily: "var(--font-cursive)" }}
    >
      {/* Default state: white cursive */}
      <span className="relative italic text-white transition-opacity duration-500 ease-out group-hover:opacity-0">
        {children}
      </span>

      {/* Hover state: red gradient cursive, fades in over the white text */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 italic bg-gradient-to-r from-[#FF2828] via-[#D83030] to-[#8E2A26] bg-clip-text text-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        {children}
      </span>

      {/* Progressive underline animation */}
      <span
        aria-hidden
        className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-[#FF2828] via-[#D83030] to-[#8E2A26] transition-all duration-500 ease-out group-hover:w-full"
      />
    </a>
  );
}