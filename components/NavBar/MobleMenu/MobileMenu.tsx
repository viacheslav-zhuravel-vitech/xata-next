"use client";
import { FC, RefObject, useRef, useState } from "react";
import { PageLinks } from "@/components/NavBar/PageLinks/PageLinks";
import { useOnClickOutside } from "usehooks-ts";

const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as RefObject<HTMLElement>, () => setIsOpen(false));

  const afterRedirectCallbackAction = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden mb-2" ref={ref}>
      <button
        className="font-bold text-lg hover:cursor-pointer"
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        Menu
      </button>
      {isOpen && (
        <div className="w-full flex flex-col justify-center absolute top-18 bg-green-50 left-0 text-color-white">
          <PageLinks
            className="h-12"
            afterRedirectCallbackAction={afterRedirectCallbackAction}
          />
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
