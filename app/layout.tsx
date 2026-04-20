import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "../components/site/site-footer";
import SiteHeader from "../components/site/site-header";

export const metadata: Metadata = {
  title: {
    default: "Techmatically - Software & IT Services",
    template: "%s - Techmatically",
  },
  description:
    "Techmatically provides software development, application services, and IT solutions for modern businesses.",
  metadataBase: new URL("https://techmatically.local"),
  applicationName: "Techmatically",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Techmatically - Software & IT Services",
    description:
      "Software development, application services, and IT solutions for modern businesses.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
