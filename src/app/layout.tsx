import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";
import logoPng from "@/assets/logo.png";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B8Space — Empowering Digital Advancement",
  description:
    "B8Space is a technology and AI transformation company helping businesses transform, automate, and scale through AI, software engineering, automation, and intelligent digital solutions.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: logoPng.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
