import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Footer";
import { Recursive } from 'next/font/google'
import QueryProvider from "@/components/QueryProvider";


const recursive = Recursive({
  subsets: ['latin'],
  variable: '--font-recursive',
})

export const metadata: Metadata = {
  title: "CaseDa - Custom high quality phone cases",
  description: "Custom high quality phone cases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${recursive.variable} antialiased`}>
        <main className="flex flex-col">
          <Navbar />
          <QueryProvider>
            {children}
          </QueryProvider>
          <Footer />
        </main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
