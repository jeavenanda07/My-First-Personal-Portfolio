import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter", 
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Jeaven Paras - Portfolio",
  description: "Welcome to my portfolio! I am a passionate front-end developer with expertise in building engaging and user-friendly web interfaces. Explore my projects, skills, and get in touch to collaborate on exciting opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} flex flex-col`}>{children}</body>
    </html>
  );
}
