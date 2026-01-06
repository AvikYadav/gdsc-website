import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "./components/footer";

const neueMontreal = localFont({
  variable: "--font-neue-montreal",
  display: "swap",
  src: [
    {
      path: "../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ]
})

const productSans = localFont({
  variable: "--font-product-sans",
  display: "swap",
  src: [
    {
      path: "../public/fonts/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ProductSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ]
})

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "GDG - NSUT",
  description: "Google Developer Group at Netaji Subhas University of Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fragmentMono.variable} ${neueMontreal.variable} ${productSans.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}