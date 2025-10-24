import type { Metadata } from 'next'
import { Inter, Permanent_Marker } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'MEOW BORG - Feline Post-Meowcalyptic TTRPG',
  description:
    'A feline post-meowcalyptic tabletop roleplaying game. Explore the harsh and mysterious world of cats\' dreams. Published under MÖRK BORG Third Party License.',
  keywords: [
    'TTRPG',
    'RPG',
    'MÖRK BORG',
    'MEOW BORG',
    'cats',
    'post-meowcalyptic',
    'tabletop',
    'roleplaying game',
    'indie rpg',
    'playtest',
  ],
  authors: [{ name: 'Blazing Well' }],
  openGraph: {
    title: 'MEOW BORG - Feline Post-Meowcalyptic TTRPG',
    description:
      'A feline post-meowcalyptic tabletop roleplaying game. Survive. Hunt. Purr.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEOW BORG - Feline Post-Meowcalyptic TTRPG',
    description:
      'A feline post-meowcalyptic tabletop roleplaying game. Survive. Hunt. Purr.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${permanentMarker.variable} font-sans bg-meow-black text-meow-white antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
