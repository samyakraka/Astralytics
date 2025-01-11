import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
import FooterWrapper from './components/FooterWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Astralytics - Social Analytics Platform',
  description: 'Modern social media analytics with AI-powered insights',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
            <Navbar />
            <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
            <FooterWrapper />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

