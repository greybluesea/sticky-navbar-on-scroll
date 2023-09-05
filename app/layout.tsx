import { ThemeProvider } from "@/lib/themeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
/* import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false }); */

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
        <body
          className={
            inter.className +
            " min-h-screen pt-[80px] sm:pt-[90px] md:pt-[100px]"
          }
        >
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
