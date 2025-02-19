import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VoiceSalesBot - AI-Powered Voice Technology for Sales",
  description: "Enhance customer interactions and boost sales with our cutting-edge voice AI platform.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} custom-scrollbar`}>{children}</body>
    </html>
  )
}

