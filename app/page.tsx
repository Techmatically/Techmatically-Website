import Reveal from "../components/motion/reveal";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-floaty absolute -top-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[color:var(--brand)]/18 blur-3xl" />
          <div className="animate-floaty absolute -bottom-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[color:var(--brand-2)]/18 blur-3xl [animation-delay:-2s]" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-black/[.04] px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                Software & IT Services
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                Build, modernize, and{" "}
                <span className="bg-gradient-to-r from-[color:var(--brand)] to-[color:var(--brand-2)] bg-clip-text text-transparent">
                  secure
                </span>{" "}
                your business with Techmatically.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                We deliver software development, application services, and
                infrastructure support that helps teams move faster, reduce
                risk, and scale with confidence.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--brand)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                >
                  Work with us
                </a>
                <a
                  href="/solutions"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-black/[.03] dark:border-white/15 dark:hover:bg-white/10"
                >
                  Explore solutions
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-black/5 bg-white/60 p-4 text-center backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div>
                  <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    Delivery
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">On time</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">Quality</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    Support
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">Long-term</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-600 dark:text-zinc-300">
                  Trusted by
                </span>
                {["Teams", "Startups", "Enterprises"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white/50 px-3 py-1 backdrop-blur dark:border-white/15 dark:bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-3xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      title: "Software Development",
                      desc: "Web, mobile, and internal tools tailored to your workflow.",
                    },
                    {
                      title: "IT Consulting",
                      desc: "Assessments, planning, and delivery to reduce project risk.",
                    },
                    {
                      title: "Cyber Security",
                      desc: "Hardening, training, and testing to protect your assets.",
                    },
                    {
                      title: "Infrastructure Support",
                      desc: "Networks, maintenance, and systems management at scale.",
                    },
                  ].map((c, idx) => (
                    <Reveal key={c.title} delayMs={160 + idx * 60}>
                      <div className="rounded-2xl border border-black/5 bg-background p-4 dark:border-white/10">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--brand)]/15 to-[color:var(--brand-2)]/15 text-[color:var(--brand)]">
                            <DotIcon />
                          </span>
                          {c.title}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          {c.desc}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  Inspired by the information architecture of{" "}
                  <a
                    className="font-semibold text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
                    href="https://tagtechnologies.co/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TAG Technologies
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[color:var(--muted)] py-16 dark:border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              Explore our modules
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Each area has its own page, so you can share exactly what matters.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "About", href: "/about", desc: "Vision, mission, and how we work." },
              {
                title: "IT Services",
                href: "/it-services",
                desc: "Consulting, outsourcing, and installations.",
              },
              {
                title: "Development Services",
                href: "/development-services",
                desc: "Applications and portal development.",
              },
              {
                title: "Packaged Solutions",
                href: "/solutions",
                desc: "ERP modules and operational solutions.",
              },
              {
                title: "Hardware & Networking",
                href: "/hardware-networking",
                desc: "Installations, maintenance, and partners.",
              },
              { title: "Contact", href: "/contact", desc: "Work with us and send a message." },
            ].map((c, idx) => (
              <Reveal key={c.title} delayMs={idx * 55}>
                <a
                  href={c.href}
                  className="group block h-full rounded-2xl border border-black/5 bg-background p-5 transition hover:-translate-y-0.5 hover:border-black/10 hover:shadow-sm dark:border-white/10 dark:hover:border-white/20"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--brand)]/15 to-[color:var(--brand-2)]/15 text-[color:var(--brand)]">
                        <DotIcon />
                      </span>
                      {c.title}
                    </div>
                    <span className="text-sm text-[color:var(--brand)] opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </div>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {c.desc}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 py-16 dark:border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-[color:var(--brand)]/10 to-[color:var(--brand-2)]/10 p-8 shadow-sm dark:border-white/10">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Ready to ship something great?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Tell us your goals and constraints. We’ll respond with a clear
                    plan and realistic milestones.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                  <a
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--brand)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  >
                    Contact Techmatically
                  </a>
                  <a
                    href="/it-services"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-black/[.03] dark:border-white/15 dark:hover:bg-white/10"
                  >
                    View IT services
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function DotIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 12.25A5.25 5.25 0 1 0 7 1.75a5.25 5.25 0 0 0 0 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 9.25A2.25 2.25 0 1 0 7 4.75a2.25 2.25 0 0 0 0 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
