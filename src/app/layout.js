import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import DesktopNavbar from "./components/DesktopNavbar"; // 👈 Add this
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NewsBurst2",
  description: "A modern site inspired by Atoll Digital, built for dynamic news delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="lg:hidden">
          <Navbar />
        </div>
        <div className="hidden lg:block">
          <DesktopNavbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
