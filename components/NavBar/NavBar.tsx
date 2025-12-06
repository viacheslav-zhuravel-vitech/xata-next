"use client";
import Image from "next/image";
import { FC } from "react";
import logo from "@/assets/images/logo.png";
import MobileMenu from "@/components/NavBar/MobleMenu/MobileMenu";
import { PageLinks } from "@/components/NavBar/PageLinks/PageLinks";
import { UserMenu } from "@/components/NavBar/UserMenu/UserMenu";
import { Divider } from "@/components/Divider/Divider";

type Props = {
  params?: {
    id: string;
  };
};

const NavBar: FC<Props> = () => {
  return (
    <nav className="w-full h-18 flex items-end justify-between pl-4 pr-4">
      <Image src={logo} alt="xata-logo" className="w-[250]" />
      <div className="hidden md:flex gap-2 mb-2">
        <PageLinks />
        <Divider />
        <UserMenu />
      </div>
      <MobileMenu />
    </nav>
  );
};

export default NavBar;
