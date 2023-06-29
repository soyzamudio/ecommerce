import { Metadata } from "next";
import { FC, ReactNode } from "react";
import "@styles/globals.css";
import localFont from "next/font/local";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

interface LayoutProps {
  children?: ReactNode;
}

const classicalRomance = localFont({
  src: [{ path: "../public/fonts/ClassicalRomance-Black.otf", weight: "900" }],
  variable: "--font-family-classical-romance",
});

export const metadata: Metadata = {
  title: "Ciclo Dispensary - Cuidamos tu piel y sus ciclos",
  description: "...",
};

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html
      lang="es"
      className={`${classicalRomance.variable} bg-off-white h-screen`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
