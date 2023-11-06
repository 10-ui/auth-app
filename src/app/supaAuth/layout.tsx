import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Supabase + Next.js',
    template: "Supabase + Next.js | %s"
  },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
