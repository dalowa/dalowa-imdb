import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

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
      <body className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        <Providers>
          <>
            {/* Header */}
            <Header />
            {/* NavBar */}
            <NavBar />
            {/* SearchBox */}

            <SearchBox />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
