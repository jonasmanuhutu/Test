import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jonas Manuhutu - Lighting Programmer & Visual Storyteller",
  description: "Professional lighting programmer, photographer, and videographer based in Breda, Netherlands. Specializing in live events, concerts, and visual storytelling.",
  keywords: "lighting programmer, photographer, videographer, live events, Breda, Netherlands, visual storytelling, lighting design",
  authors: [{ name: "Jonas Manuhutu" }],
  creator: "Jonas Manuhutu",
  openGraph: {
    title: "Jonas Manuhutu - Lighting Programmer & Visual Storyteller",
    description: "Professional lighting programmer, photographer, and videographer based in Breda, Netherlands.",
    url: "https://jonasmanuhutu.com",
    siteName: "Jonas Manuhutu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonas Manuhutu - Lighting Programmer & Visual Storyteller",
    description: "Professional lighting programmer, photographer, and videographer based in Breda, Netherlands.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} font-cinematic antialiased film-grain`}
      >
        {children}
      </body>
    </html>
  );
}
