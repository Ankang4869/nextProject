import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[--bg] text-[--text]">
        <div className="w-[1536px] max-2xl:w-[1280px] max-xl:w-[1024px] max-lg:w-[768px] max-lg:px-[20px] max-md:w-[640px] max-sm:w-[475px] min-h-screen mx-auto px-[50px] flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
