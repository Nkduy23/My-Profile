import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyễn Khánh Duy - Frontend Developer",
  description: "Personal portfolio of Nguyễn Khánh Duy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <div className="bg-white">
          <NavBar />
        </div>
        <main className="max-w-7xl mx-auto px-4 min-h-screen">{children}</main>
        <div className="bg-gray-100">
          <Footer />
        </div>
      </body>
    </html>
  );
}
