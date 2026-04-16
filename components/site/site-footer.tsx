import Link from "next/link";
import { NAV_ITEMS } from "../../lib/navigation";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-12 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-2)] text-xs font-semibold text-white shadow-sm">
              T
            </span>
            <span>
              © {new Date().getFullYear()} Techmatically. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} className="hover:underline" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-zinc-500 dark:text-zinc-400">
            Built with a clean, modular architecture.
          </span>
          <a
            className="hover:underline"
            href="https://tagtechnologies.co/"
            target="_blank"
            rel="noreferrer"
          >
            Reference pattern
          </a>
        </div>
      </div>
    </footer>
  );
}

