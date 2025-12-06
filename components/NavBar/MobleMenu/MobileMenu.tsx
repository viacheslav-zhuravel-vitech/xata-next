"use client";
import { FC, useState } from "react";
import { PageLinks } from "@/components/NavBar/PageLinks/PageLinks";

const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden mb-2">
      <button
        className="font-bold text-lg"
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        Menu
      </button>
      {isOpen && (
        <div className="w-full flex flex-col justify-center absolute top-18 bg-green-50 left-0 text-color-white">
          <PageLinks className="h-12" />
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
