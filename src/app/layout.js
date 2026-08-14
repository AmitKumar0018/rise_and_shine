import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import FloatingCta from "@/components/FloatingCta";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Early Tune - Child Development Centre",
  description: "Child Development Centre And Rehabilitation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${inter.variable} h-full antialiased scroll-behavior`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingCta />
      </body>
    </html>
  );
}
