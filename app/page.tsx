import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { TheHouse } from "@/components/TheHouse";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FoodShowcase } from "@/components/FoodShowcase";
import { WineTeaser } from "@/components/WineTeaser";
import { PrivateDining } from "@/components/PrivateDining";
import { DessertSection } from "@/components/DessertSection";
import { PhotoExperience } from "@/components/PhotoExperience";
import { Reservation } from "@/components/Reservation";
import { Location } from "@/components/Location";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <TheHouse />
      <ExperienceSection />
      <FoodShowcase />
      <WineTeaser />
      <PrivateDining />
      <DessertSection />
      <PhotoExperience />
      <Reservation />
      <Location />
    </>
  );
}
