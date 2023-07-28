import { Metadata } from "next";
import { FC, ReactNode } from "react";
import "@styles/globals.css";
import localFont from "next/font/local";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { NEXT_URL } from "@lib/constants/global";
import Ribbon from "@components/Ribbon";
import { CartStoreContextProvider } from "@context/CartStore";

interface LayoutProps {
  children?: ReactNode;
}

const classicalRomance = localFont({
  src: [{ path: "../public/fonts/ClassicalRomance-Black.otf", weight: "900" }],
  variable: "--font-family-classical-romance",
});

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_URL),
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
        url: `/images/og-image-home-page.jpg`,
        width: 1200,
        height: 630,
        alt: "Ciclo Dispensary | Cuidamos tu piel y sus ciclos",
      },
    ],
  },
};

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <CartStoreContextProvider>
      <html
        lang="es"
        className={`app ${classicalRomance.variable} bg-off-white h-screen`}
      >
        <body className="flex flex-col min-h-screen">
          <Ribbon />
          <Nav />
          <main className="flex flex-col flex-1 w-full">{children}</main>
          <Footer />
        </body>
      </html>
    </CartStoreContextProvider>
  );
};

export default RootLayout;
