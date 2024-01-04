import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderWithNavbar from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'RfQ by GGX',
  description: 'Request for quote service powered by GGX',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderWithNavbar />
        <div className='md:ml-32'>
          {children}
        </div>
      </body>
    </html>
  )
}
