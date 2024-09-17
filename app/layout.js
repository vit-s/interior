// components
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider"

// font
import { Sen } from "next/font/google"

// styles
import "./globals.css"

const Josef = Sen({
  subsets: ['latin'],
  weight:  ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
    <body
      className={Josef.className}
    >
    <ThemeProvider
      attribute={'class'}
      defautlTheme={'light'}
    >
      <Header/>
      {children}
      <Footer/>
    </ThemeProvider>
    </body>
    </html>
  )
}
