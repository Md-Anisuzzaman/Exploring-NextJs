import { Rubik } from 'next/font/google'
import './globals.css'
import Header from './Header'
import Footer from './Footer'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
