import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HRone Apps',
  description: 'App directory for HRone Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 font-sans text-neutral-900">
        {children}
      </body>
    </html>
  )
}
