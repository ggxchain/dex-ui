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
      <body className={`inter.className min-h-dvh`}>
        <main className='h-max flex flex-col'>
          <HeaderWithNavbar />
          <div className="flex min-h-full h-max flex-col items-center justify-between md:ml-64">
            <div className="text-slate-100 flex md:h-[80vh] min-w-full p-5 md:mt-10 md:p-10 md:rounded-2xl md:bg-bg-gr-2/20">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
