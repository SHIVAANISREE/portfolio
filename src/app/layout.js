import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivaanisree R K | Portfolio",
  description: "Portfolio of Shivaanisree R K, Software Developer and AI Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <BackgroundVideo /> */}
        <div className="scroll-container h-screen overflow-y-auto relative z-10">{children}</div>
      </body>
    </html>
  );
}
