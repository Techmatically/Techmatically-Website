import Container from "../../../components/common/container";
import PageHeader from "../../../components/common/page-header";
import Reveal from "../../../components/motion/reveal";

export default function SolutionsPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        title="Packaged Solutions"
        subtitle="Ready-to-adapt modules for common business operations—delivered with implementation support."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Cyber Security",
              "Financials / ERP",
              "Payroll Management",
              "Accounts Management",
              "Project Management",
              "Fixed Asset Management",
              "Provident Fund Management",
              "Employee Document Management",
              "Sales Inventory Control",
              "Lease Management",
            ].map((title, idx) => (
              <Reveal key={title} delayMs={idx * 45}>
                <div className="rounded-2xl border border-black/5 bg-background p-5 dark:border-white/10">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Configure to your process, integrate with existing systems,
                    and roll out with confidence.
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={180}>
            <div className="mt-10 rounded-3xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold">Want a tailored demo?</div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                We can map one or two of your real workflows into a proposed
                solution plan before implementation.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--brand)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Request a demo
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

