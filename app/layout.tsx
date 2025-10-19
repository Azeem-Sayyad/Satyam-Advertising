import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satyam Advertising",
  description: "A simple Next.js homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
