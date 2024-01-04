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
        <main className="flex min-h-screen flex-col items-center justify-between md:ml-64">
          <div className="text-slate-100 flex h-screen md:min-w-[90%] min-w-full p-5 md:mt-10 md:p-10 md:rounded-2xl bg-bg-gr-2/20">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
