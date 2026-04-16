import Container from "../../../components/common/container";
import Reveal from "../../../components/motion/reveal";

export default function ITServicesPage() {
  return (
    <main className="bg-background text-foreground">

      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center text-center">       
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/itservices2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            IT Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Practical consulting and managed support designed to keep your systems stable and your teams productive.
          </p>
        </div>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "IT Process Consulting",
                desc: "Observe, analyze, and close delivery gaps across your IT projects.",
              },
              {
                title: "IT Outsourcing Services",
                desc: "Extend your team with engineers and support that integrate fast.",
              },
              {
                title: "IT Installation Services",
                desc: "On-site + remote deployments, hardening, and handover.",
              },
            ].map((c, idx) => (
              <Reveal key={c.title} delayMs={idx * 70}>
                <div className="rounded-2xl border border-black/5 bg-background p-5 dark:border-white/10">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {c.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={140}>
            <div className="mt-10 rounded-3xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold">Need help choosing?</div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Tell us what you’re trying to achieve, and we’ll recommend a
                practical plan with clear milestones.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--brand)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Contact us
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}