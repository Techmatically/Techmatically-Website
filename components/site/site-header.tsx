import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "../../lib/navigation";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/75 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        
        {/* Logo Only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/techmatically_logo.png"
            alt="Techmatically Logo"
            width={160}
            height={50}
            className="w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-5 text-sm text-zinc-700 dark:text-zinc-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              className="hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--brand)] px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </header>
  );
}