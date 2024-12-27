import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css"; // Ensure the path is correct
import Footer from "./Components/Footer"; // Adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Genomic Archive",
  description: "A genomic data repository",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Global components */}
        
        {/* Main content (the page content) */}
        <main>{children}</main>
       
      </body>
    </html>
  );
}