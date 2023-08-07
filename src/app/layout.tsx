import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'stefanlogue.dev',
  description: 'Welcome to my personal site',
}

const HeaderComponent = () => {
  return (
    <header className='bg-zinc-500 sticky top-0 z-50'>
      <div className='flex flex-row justify-between px-5 py-4 max-w-5xl mx-auto'>
        <p>Stefan Logue</p>
        <p>menu</p>
      </div>
    </header>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        <HeaderComponent />
        {children}
      </body>
    </html>
  )
}
