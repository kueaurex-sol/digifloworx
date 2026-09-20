import CrossMarquee from "@/components/CrossMarquee";
import GradientCursiveText from "../GradientCursiveText";

const clients = [
  { name: "Client One", src: "/99acres.png" },
  { name: "Client Two", src: "/goldmen.png" },
  { name: "Client Three", src: "/hackculture.png" },
  { name: "Client Four", src: "/paytm.png" },
  { name: "Client Five", src: "/thub.png" },
  { name: "Client Six", src: "/digifloworx-logo-navbar.png" },
];

export default function ClientsSection() {
  return(
    <div id="our-clients" className="lg:mt-20 md:mt-20 mt-12">
       <h1 className="text-center font-black lg:text-5xl md:text-3xl text-xl lg:px-20 md:px-20 px-4 lg:mb-4 md:mb-4 mb-2">
                  Our <GradientCursiveText>Clients</GradientCursiveText>
                </h1>
    <CrossMarquee clients={clients} />
    </div>
)
}