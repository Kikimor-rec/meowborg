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
    'A tabletop roleplaying game where cats survive in a post-meowcalyptic world',
  keywords: ['TTRPG', 'RPG', 'MÖRK BORG', 'cats', 'post-meowcalyptic', 'tabletop'],
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
