import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const poppins =DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NileConnect",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
