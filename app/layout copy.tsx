import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import { AppStateProvider } from '@/lib/utils/app-state'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from "@/components/header";
function funcOmo() {
  console.log('here')
}


export const metadata: Metadata = {
  title: "Hume AI - EVI - Next.js Starter",
  description: "A Next.js starter using Hume AI's Empathic Voice Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col min-h-screen"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppStateProvider>
            <Header/>
          {/* <Nav /> */}
          {children}
          </AppStateProvider>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
