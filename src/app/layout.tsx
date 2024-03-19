import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import HeaderWithNavbar from '@/components/header'
import { ToastContainer } from 'react-toastify'

const sans = DM_Sans({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'RfQ by GGX',
  description: 'Request for quote service powered by GGX',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} relative min-h-dvh`}>
        <main className='h-dvh flex flex-col'>
          <ToastContainer position='top-right' closeOnClick theme='colored' />

          <HeaderWithNavbar />
          <div className="flex h-dvh flex-col items-center justify-between md:ml-80">
            <div className="text-GGx-light flex md:h-[80vh] w-[90%] p-5 md:mt-10">
              {children}
            </div>
          </div>
        </main>

      </body>
    </html>
  )
}
