import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import InitialLoader from "@/components/InitialLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jonas Manuhutu — Lighting Programmer & Visual Storyteller",
    template: "%s — Jonas Manuhutu",
  },
  description:
    "Cinematic portfolio of Jonas Manuhutu, freelance lighting programmer/operator and video-/photographer based in Breda, Netherlands.",
  keywords: [
    "lighting programmer",
    "lighting operator",
    "visual storyteller",
    "video",
    "photography",
    "Breda",
    "Netherlands",
    "live events",
  ],
  authors: [{ name: "Jonas Manuhutu" }],
  openGraph: {
    title: "Jonas Manuhutu — Lighting Programmer & Visual Storyteller",
    description:
      "Cinematic portfolio of Jonas Manuhutu, freelance lighting programmer/operator and video-/photographer based in Breda, Netherlands.",
    type: "website",
    locale: "en_US",
    url: "https://jonasmanuhutu.example", // update when deploying
    siteName: "Jonas Manuhutu Portfolio",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grain`}
      >
        <InitialLoader />
        <Header />
        {children}
      </body>
    </html>
  );
}
