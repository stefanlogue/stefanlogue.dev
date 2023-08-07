import HeaderComponent from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'stefanlogue.dev',
  description: 'Welcome to my personal site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen bg-white dark:bg-gray-800 transition-colors duration-150 ease-linear'>
        <HeaderComponent />
        {children}
        <Footer />
      </body>
    </html>
  )
}
