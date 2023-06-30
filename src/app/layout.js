import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer1 from "./components/Footer/Footer1";
import Footer2 from "./components/Footer/Footer2";
import Scroll from "./components/ScrollButton/Scroll";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GeeCom Service Private Limited',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer1 />
        <Footer2 />
        <Scroll/>
      </body>
    </html>
  )
}