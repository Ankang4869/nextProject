import './globals.css'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[--bg] text-[--text]">
        <div className="w-[1536px] min-h-screen m-auto px-[50px] flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}