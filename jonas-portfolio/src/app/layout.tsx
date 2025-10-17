import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonas Manuhutu - Lighting Programmer & Visual Storyteller",
  description: "Professional lighting programmer, photographer, and video producer based in Breda, Netherlands. Specializing in live events, photography, and video production.",
  keywords: ["lighting programmer", "photographer", "video producer", "Breda", "Netherlands", "live events", "visual storytelling"],
  authors: [{ name: "Jonas Manuhutu" }],
  creator: "Jonas Manuhutu",
  openGraph: {
    title: "Jonas Manuhutu - Lighting Programmer & Visual Storyteller",
    description: "Professional lighting programmer, photographer, and video producer based in Breda, Netherlands.",
    url: "https://jonasmanuhutu.com",
    siteName: "Jonas Manuhutu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonas Manuhutu - Lighting Programmer & Visual Storyteller",
    description: "Professional lighting programmer, photographer, and video producer based in Breda, Netherlands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} font-cinematic antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
