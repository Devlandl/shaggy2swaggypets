import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConvexClientProvider from "@/components/ConvexClientProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaggy 2 Swaggy Pet Grooming | 3411 Arlington Ave, Riverside, CA",
  description:
    "4.7 stars on Yelp with 192+ reviews. Professional dog and cat grooming at 3411 Arlington Ave, Riverside, CA. Natural organic products, walk-ins welcome. Upload a photo for an instant quote. (951) 742-5674",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <ConvexClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
