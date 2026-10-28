import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c0392b",
};

export const metadata: Metadata = {
  title: "IJVRA – International Journal of Vedic Research and Arts | UGC CARE Listed",
  description:
    "IJVRA is a UGC CARE Group-I listed, peer-reviewed, double-blind refereed international journal. Submit your research paper at just ₹599. Fast publication within 7 days.",
  keywords: [
    "UGC CARE journal",
    "peer reviewed journal",
    "IJVRA",
    "international journal",
    "vedic research",
    "paper submission",
    "low cost publication",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
