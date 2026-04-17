import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sriram M | Algorithmic Trading Systems Engineer",
  description: "Production-grade trading infrastructure, quantitative systems, and real-time execution frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-brand-blue/20 selection:text-brand-blue`}
      >
        {children}
        <Script src="/chatbot-widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
