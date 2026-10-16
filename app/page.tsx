import { Closing } from "@/components/closing";
import { Contact } from "@/components/contact";
import { Coverage } from "@/components/coverage";
import { FleetRange } from "@/components/fleet-range";
import { Handling } from "@/components/handling";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Lanes } from "@/components/lanes";
import { PhotoBand } from "@/components/photo-band";

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoBand />
      <Lanes />
      <FleetRange />
      <HowItWorks />
      <Handling />
      <Coverage />
      <Closing />
      <Contact />
    </>
  );
}
