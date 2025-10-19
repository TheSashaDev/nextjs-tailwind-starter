import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Next.js 14 + TS + Tailwind Starter",
    template: "%s | Next.js Starter",
  },
  description: "Bootstrap Next.js 14 with TypeScript and Tailwind CSS, with design tokens and variable fonts.",
  openGraph: {
    title: "Next.js 14 + TS + Tailwind Starter",
    description:
      "Bootstrap Next.js 14 with TypeScript and Tailwind CSS, with design tokens and variable fonts.",
    url: "https://example.com",
    siteName: "Next.js Starter",
    images: [
      {
        url: "https://dummyimage.com/1200x630/0b0b0b/ffffff&text=OG+Placeholder",
        width: 1200,
        height: 630,
        alt: "OG image placeholder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 14 + TS + Tailwind Starter",
    description:
      "Bootstrap Next.js 14 with TypeScript and Tailwind CSS, with design tokens and variable fonts.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}
