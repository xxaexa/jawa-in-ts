import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JAWA-IN',
  description: 'Online Course Basa Jawa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-main">{children}</body>
    </html>
  )
}
