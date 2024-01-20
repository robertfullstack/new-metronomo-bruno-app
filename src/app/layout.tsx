import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";



export const metadata: Metadata = {
  title: "EXEMLO DE METRONOMO ",
  description: "Simple metronome for musicians",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ fontFamily: 'Arial' }}>
        <Header />
        <main className="flex justify-center mt-4">
          <div className="w-full max-w-screen-xl px-2 md:px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
