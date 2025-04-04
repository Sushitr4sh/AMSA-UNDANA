import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AMSA UNDANA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} relative min-h-screen`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <GradientBackground fixed={true} />
      </body>
    </html>
  );
}
