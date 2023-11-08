import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'})

const sfPro = localFont({
  src: [
    {
      path: '../public/assets/fonts/sf-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/sf-med.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/sf-reg.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro'
})

export const metadata: Metadata = {
  title: 'IGospelSongs',
  description: 'Gospel for all',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{backgroundColor: 'black'}} className={`${sfPro.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
