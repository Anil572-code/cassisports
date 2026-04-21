import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Cassi Sports & Recreational Center | Premium Indoor Sports",
    template: "%s | Cassi Sports & Rec Center",
  },
  description:
    "Cassi Sports & Recreational Center Pvt. Ltd. — premium indoor sports facilities including futsal, cricsal, swimming, table tennis, and a world-class sports lounge. Where Champions Train & Champions Relax.",
  keywords: [
    "indoor sports",
    "futsal",
    "cricsal",
    "swimming",
    "sports lounge",
    "table tennis",
    "carrom",
    "sports center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

