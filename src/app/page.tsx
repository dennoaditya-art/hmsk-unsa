import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Proker } from "@/components/sections/proker";
import { StructureOverview } from "@/components/sections/structure-overview";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Proker />
      <StructureOverview />
    </>
  );
}