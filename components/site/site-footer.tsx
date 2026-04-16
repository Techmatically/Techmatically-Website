import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "../../lib/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-14 text-[0.95rem] text-zinc-600 dark:border-white/10 dark:text-zinc-400">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

        {/* 3 COLUMN GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* COLUMN 1 - LOGO + DESCRIPTION */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/techmatically_logo.png"
                alt="Techmatically Logo"
                width={160}
                height={50}
                className="w-auto object-contain"
                priority
              />
            </Link>

            <p className="leading-relaxed text-zinc-500 dark:text-zinc-400">
              Your trusted partner for tech solutions, development, and digital growth.
            </p>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - CONTACT */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Contact Us
            </h3>

            <ul className="space-y-4 font-medium">

              {/* ADDRESS */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Suite# 106-108 <br />
                  Sumya Business Avenue <br />
                  M.A.C.H.S, Karachi, Pakistan
                </span>
              </li>

              {/* PHONE */}
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+92321-3166393"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  +92 321-3166393
                </a>
              </li>

              {/* EMAIL */}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:techmati@techmatically.com"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  techmati@techmatically.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs dark:border-white/10 md:flex-row">

          <p className="text-zinc-500">
            © {new Date().getFullYear()} Techmatically. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}