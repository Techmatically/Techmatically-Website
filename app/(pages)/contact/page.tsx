import Container from "../../../components/common/container";
import PageHeader from "../../../components/common/page-header";
import ContactForm from "../../../components/contact/contact-form";
import Reveal from "../../../components/motion/reveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        title="Contact"
        subtitle="We seek to create a long-term relationship built on results. Share a few details and we’ll respond with next steps."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Work With Us
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  Tell us what you’re building, timelines, and constraints. We’ll
                  get back with a practical plan and estimated next steps.
                </p>

                <div className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="rounded-2xl border border-black/5 bg-[color:var(--muted)] p-4 dark:border-white/10">
                    <div className="font-semibold text-foreground">
                      Contact details (placeholder)
                    </div>
                    <div className="mt-2">
                      Email:{" "}
                      <span className="font-semibold">
                        hello@techmatically.com
                      </span>
                    </div>
                    <div className="mt-1">Phone: +92 XX XXX XXXXX</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}

