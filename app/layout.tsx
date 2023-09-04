import { ThemeProvider } from "@/lib/themeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShadcnUI + next-themes, learned from codeSTACKr",
  description: "ShadcnUI + next-themes, learned from codeSTACKr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
