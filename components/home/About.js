import GradientCursiveText from "@/components/GradientCursiveText";
import { CompareCards } from "@/components/CompareCards";
export default function About() {
  return (
    <div id="about" className="flex justify-center items-center ">
      <div>
    <h1 className="lg:px-[12vw] md:px-[10wv] px-4  font-black lg:text-4xl md:text-3xl text-xl text-center lg:mb-4 md:mb-4 mb-2">
        The growth operating system for {" "}
        <GradientCursiveText>Modern Brands.</GradientCursiveText>
      </h1>
      <p className="lg:px-[12vw] md:px-[10wv] px-4  font-extralight text-center lg:text-sm md:text-sm text-xs">
        Most agencies hand you disconnected deliverables — a logo here, an ad
        campaign there, a website that never talks to your funnel. DIGIFLOWORX
        replaces that chaos with one integrated system: brand, content,
        performance marketing, and technology working from the same playbook,
        aimed at the same number — your growth.
      </p>
      <CompareCards/>
      </div>
  
    </div>
  );
}
