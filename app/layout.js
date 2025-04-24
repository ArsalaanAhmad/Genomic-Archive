// app/layout.js
import "./styles/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import Header from "./Components/Header";

export const metadata = {
  title: "Genomic Archive",
  description: "A centralized platform for genomic data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        />
      </head>
      <body className="flex flex-col min-h-screen font-poppins">
        {/* sticky header */}
        <Header />

        {/* the page content */}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}