"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../../lib/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/75 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">

        {/* Logo */}
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
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.children &&
                item.children.some((sub) => pathname.startsWith(sub.href)));

            return (
              <div key={item.label} className="relative group">

                {/* Main Link */}
               <Link
  href={item.href}
  className={`
    relative px-3 py-2 rounded-full transition-all duration-200
    ${isActive 
      ? "text-[color:var(--brand)]"
      : "text-zinc-700 dark:text-zinc-300 hover:text-[color:var(--brand)]"
    }
  `}
>
  {/* Glow background */}
  <span
    className={`
      absolute inset-0 rounded-full -z-10 transition-all duration-300
      ${isActive 
        ? "bg-[color:var(--brand)]/10"
        : "bg-[color:var(--brand)]/0 group-hover:bg-[color:var(--brand)]/10"
      }
    `}
  />

  {item.label}
</Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute left-0 top-full z-50 pt-3 w-56 rounded-xl bg-white p-3 shadow-lg opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:bg-zinc-900">
                    
                    {item.children.map((sub) => {
                      const isSubActive = pathname === sub.href;

                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`
                            block rounded-md px-3 py-2 text-sm transition
                            ${isSubActive 
                              ? "bg-[color:var(--brand)] text-white"
                              : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            }
                          `}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  
                  </div>
                )}

              </div>
            );
          })}
        </nav>

        {/* CTA */}
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