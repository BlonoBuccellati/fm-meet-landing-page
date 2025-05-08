import type { Metadata } from "next";
import "@/styles/globals.css";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["500", "900"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Meet landing page",
  description: "Meet landing page of Frontend Mentor Solution",
  icons: "favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
