import { FC } from "react";
import { Hero } from "@/components/Hero/Hero";
import { NewProperty } from "@/components/NewProperty/NewProperty";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <NewProperty />
    </>
  );
};

export default HomePage;
