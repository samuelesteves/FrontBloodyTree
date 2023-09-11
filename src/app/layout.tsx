import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "@/assets/sass/global.scss";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bloody Tree",
  description: "Family trees app",
  robots: {
    index: false,
    follow: false,
  },
  themeColor: "#ffffff",
  icons: [
    { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
    {
      rel: "apple-touch-icon",
      sizes: "100x100",
      url: "/apple-touch-icon.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
