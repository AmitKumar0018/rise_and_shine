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
  title: "Early Tune | Child Development Centre & Rehabilitation",
  description:
    "Early Tune is a Child Development Centre and Rehabilitation centre providing speech therapy, occupational therapy, physiotherapy, ABA therapy, special education and early intervention for children.",
  metadataBase: new URL("https://www.earlytunecdc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Early Tune | Child Development Centre & Rehabilitation",
    description:
      "Supporting children through therapy, early intervention, special education and rehabilitation services.",
    url: "https://www.earlytunecdc.com",
    siteName: "Early Tune",
    type: "website",
  },
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
