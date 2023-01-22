import '../styles/globals.css'
import Footer from '../components/Footer'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-[#0c0c0d]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
