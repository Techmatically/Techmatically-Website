import Container from "./container";
import Reveal from "../motion/reveal";

export default function PageHeader(props: {
  title: string;
  subtitle?: string;
  tone?: "muted" | "default";
}) {
  const toneClass =
    props.tone === "default"
      ? "bg-background"
      : "bg-[color:var(--muted)] dark:bg-[color:var(--muted)]";

  return (
    <section className={`border-b border-black/5 py-14 dark:border-white/10 ${toneClass}`}>
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {props.title}
          </h1>
          {props.subtitle ? (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {props.subtitle}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}

