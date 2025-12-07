import Image from "next/image";
import hero from "@/assets/images/hero.png";
import { HeroCard } from "@/components/Hero/HeroCard/HeroCard";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-2 bg-green-50 md:max-h-[550px] md:flex-row">
      <div className="flex flex-col p-8 gap-8 flex-1 bg-green-50">
        <HeroCard
          title="Find Your Dream Home"
          description="Discover the best properties tailored for you"
          href="/properties"
          className="bg-green-100"
        />
        <HeroCard
          title="Sell Your Property Easily"
          description="Connect with buyers and get the best value for your property"
          href="/properties/add"
        />
      </div>
      <div className="flex-2 flex h-full w-full">
        <Image
          src={hero}
          alt="your-hero-house"
          className="object-cover md:max-h-[550px]"
        />
      </div>
    </div>
  );
};
