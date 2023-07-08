import { Metadata } from "next";
import { FC, ReactNode } from "react";
import "@styles/globals.css";
import localFont from "next/font/local";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { NEXT_URL } from "@lib/constants/global";
import Ribbon from "@components/Ribbon";

interface LayoutProps {
  children?: ReactNode;
}

const classicalRomance = localFont({
  src: [{ path: "../public/fonts/ClassicalRomance-Black.otf", weight: "900" }],
  variable: "--font-family-classical-romance",
});

export const metadata: Metadata = {
  title: {
    template: "Ciclo Dispensary | %s",
    default: "Ciclo Dispensary | Cuidamos tu piel y sus ciclos",
  },
  description: "Ciclo Dispensary | Cuidamos tu piel y sus ciclos",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: `${NEXT_URL}`,
    siteName: "Ciclo Dispensary",
    title: "Ciclo Dispensary | Cuidamos tu piel y sus ciclos",
    description: "Ciclo Dispensary | Cuidamos tu piel y sus ciclos",
    images: [
      {
        url: `${NEXT_URL}/images/og-image-home-page.jpg`,
        width: 1200,
        height: 630,
        alt: "Ciclo Dispensary | Cuidamos tu piel y sus ciclos",
      },
    ],
  },
};

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html
      lang="es"
      className={`${classicalRomance.variable} bg-off-white h-screen`}
    >
      <body className="flex flex-col h-full">
        <Ribbon />
        <Nav />
        <main className="flex flex-col flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
