import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Columbus Tech Partners | AI, Automation & Web Development",
  description:
    "We craft cutting-edge websites, AI solutions, and business automations that drive results and exceed expectations.",
  keywords: [
    "Columbus web development",
    "AI automation",
    "Next.js developer",
    "business automation Columbus",
    "custom software development Ohio",
  ],
  openGraph: {
    title:
      "Columbus Tech Partners | AI, Automation & Web Development",
    description:
      "Custom websites, AI solutions, and automation tools built for performance and results.",
    url: "https://columbustechpartners.com",
    siteName: "Columbus Tech Partners",
    images: [
      {
        url: "/og-image.png",
        width: 1552,
        height: 813,
        alt: "Columbus Tech Partners website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Columbus Tech Partners",
    description:
      "We build websites, automation systems, and AI solutions that deliver results.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
