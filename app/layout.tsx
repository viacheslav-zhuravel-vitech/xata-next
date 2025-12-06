import { FC, ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};
const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default MainLayout;
export const metadata: Metadata = {
  title: "Xata",
  description: "Xata Next.js - знайди своє ідеальне житло",
};
