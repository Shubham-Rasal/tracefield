import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Tracefield — Real-to-Sim Robot Evaluation";
const description =
  "Turn real scenes into simulation-backed evaluation suites for robot policies. Rank checkpoints, map failures, and compare progress before spending robot hours.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tracefield.ai"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://tracefield.ai",
    siteName: "Tracefield",
    images: [
      {
        url: "/assets/rt1x/sim_vs_real_scatter.png",
        width: 1200,
        height: 800,
        alt: "Simulated vs real-world success rates for RT-1-X",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/rt1x/sim_vs_real_scatter.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
