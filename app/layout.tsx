import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Shobky",
  description:
    "This is my portfolio, Some projects I worked on and click mario to get my links",
  openGraph: {
    images: "/opengraph-image.png",
    title: "Ahmed Shobky",
    description:
      "This is my portfolio, Some projects I worked on and click mario to get my links",
    url: "shobky.github.io",
    siteName: "Ahmed Shobky",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Shobky",
    description:
      "This is my portfolio, Some projects I worked on and click mario to get my links",
    images: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
