import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dalowa - IMDb",
  description: "This is a personal project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {/* Header */}
        <Header />
        {/* NavBar */}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
