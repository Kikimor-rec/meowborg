import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MEOW BORG - Feline Post-Apocalyptic TTRPG',
  description:
    'A tabletop roleplaying game where cats survive in a post-apocalyptic world',
  keywords: ['TTRPG', 'RPG', 'MÖRK BORG', 'cats', 'post-apocalyptic', 'tabletop'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-meow-black text-meow-white antialiased">
        {children}
      </body>
    </html>
  )
}
