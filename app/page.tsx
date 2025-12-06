import { FC } from "react";
import Link from "next/link";

const HomePage: FC = () => {
  return (
    <>
      <span className="text-2xl text-red-500">Welcome to the Home Page</span>
      <Link
        href={{
          pathname: "/properties",
        }}
      >
        Properties
      </Link>
    </>
  );
};

export default HomePage;
