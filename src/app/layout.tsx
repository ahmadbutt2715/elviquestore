import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elvique | Premium Smart Home, Audio & Wearables Store",
  description: "Experience modern minimalism with Elvique. Explore premium smart watches, studio-grade audio headphones, adaptive smart lighting, and active smart devices built for premium lifestyles. Engineered with precision.",
  keywords: ["Elvique", "Smart Home", "Audio headphones", "Wearable watch", "Tech Accessories", "Premium gadgets"],
  authors: [{ name: "Elvique Design Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-google-blue-light selection:text-google-blue">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
