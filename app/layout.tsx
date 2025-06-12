import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Método NeuroCognitivo 360°",
  description:
    "300+ atividades lúdicas para desenvolver atenção, memória, raciocínio lógico e muito mais. Aprendizado divertido para toda a família!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
