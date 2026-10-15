import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "H4R1SH | Digital Marketing, Video Editing & AI Automation",
  description:
    "Portfolio of H4r1sh — a digital marketer and video editor building real-time AI products: email automation, AI canvas, e-commerce, task tracker, and AI mock interview.",
  keywords: [
    "digital marketing",
    "video editing",
    "AI automation",
    "email automation",
    "AI mock interview",
    "e-commerce",
    "task tracker",
    "portfolio",
  ],
  authors: [{ name: "H4r1sh" }],
  openGraph: {
    title: "H4R1SH | Digital Marketing, Video Editing & AI Automation",
    description:
      "Scroll-stopping video, growth-driven marketing, and real-time AI products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
