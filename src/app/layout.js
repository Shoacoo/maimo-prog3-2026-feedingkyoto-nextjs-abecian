import { Lexend } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "Feeding Kyoto",
  description: "El mejor sushi japones de BA",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Navbar />
        {children}
         <Footer />
      </body>
     
    </html>
  );
}
