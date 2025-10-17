import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jonas Manuhutu | Lighting Programmer & Visual Storyteller',
  description: 'Freelance lighting programmer/operator and video-/photographer based in Breda, Netherlands. Crafting unforgettable visual experiences through light and lens.',
  keywords: ['lighting programmer', 'lighting operator', 'photographer', 'videographer', 'Breda', 'Netherlands', 'live events', 'visual storytelling'],
  authors: [{ name: 'Jonas Manuhutu' }],
  openGraph: {
    title: 'Jonas Manuhutu | Lighting Programmer & Visual Storyteller',
    description: 'Freelance lighting programmer/operator and video-/photographer based in Breda, Netherlands.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
