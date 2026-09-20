import Aurora from "@/components/Aurora";
import { CyberButton } from "@/components/CyberButton";
import { ArrowRight } from "lucide-react";
import GradientCursiveText from "@/components/GradientCursiveText";
import Link from "next/link";

function Hero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen h-screen flex justify-center items-center lg:px-[12vw] md:px-[10wv] px-4 text-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-black">
        <Aurora
          colorStops={["#FF0020", "#c80017", "#a80013"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <div>
        <h1 className=" font-black lg:text-5xl md:text-3xl text-xl lg:px-20 md:px-20 px-4 lg:mb-4 md:mb-4 mb-2">
          We Don't Just Build <GradientCursiveText>Brands.</GradientCursiveText>{" "}
          We Build <GradientCursiveText>Growth</GradientCursiveText> Systems.
        </h1>
        <p className="lg:text-sm md:text-sm text-xs lg:font-semibold md:font-semibold font-light">
          DIGIFLOWORX is the full-stack growth partner for founders who refuse
          to settle — strategy, creative, and technology, engineered into one
          system that compounds.
        </p>
        <div className="lg:flex md:flex hidden gap-4 justify-center mt-4">
          <Link href={"/#contact-us"}>
            <CyberButton variant="primary" size="lg" className="cursor-pointer">
              Start Your Growth System
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </CyberButton>
          </Link>
          <Link href={"/#process"}>
            <CyberButton
              variant="secondary"
              size="lg"
              className="cursor-pointer"
            >
              See Our Process
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </CyberButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
