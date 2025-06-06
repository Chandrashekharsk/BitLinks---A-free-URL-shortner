import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitLinks - Your Link Shortener",
  description: "Shorten your links with BitLinks and share them easily!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      >
        <Navbar/>
        <Toaster position="top-right"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
