import { FC, ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

type LayoutProps = {
  children: ReactNode;
};
const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
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
