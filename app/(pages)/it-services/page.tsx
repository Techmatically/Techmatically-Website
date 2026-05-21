"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Container from "../../../components/common/container";
import Reveal from "../../../components/motion/reveal";

const SERVICES = [
  {
    title: "AI transformation",
    desc: "We maximize the power and promise of AI to drive transformative business outcomes through our comprehensive AI consulting services and solutions.",
    href: "/contact",
  },
  {
    title: "Data & Analytics",
    desc: "We enable enterprises to transform data into a business advantage by tapping into the capabilities of ML, advanced analytics, generative AI, and connected intelligence.",
    href: "/contact",
  },
  {
    title: "Digital",
    desc: "We offer core insights-driven digital transformation capabilities, modernize key systems to accelerate innovation, and provide a design-led, unified, and personalized experience.",
    href: "/contact",
  },
  {
    title: "IT Process Consulting",
    desc: "Observe, analyze, and close delivery gaps across your IT projects.",
    href: "/contact",
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure designed around your workload and team.",
    href: "/contact",
  },
];

const FLOAT_IMAGES = [
  { src: "/services1.jpg", rotate: -8, isLeft: true,  top: "18%", side: "8%",  dx: -28, dy:  24, floatDuration: "3.2s", floatDelay: "0s",  width: 180, height: 120 },
  { src: "/services3.jpg", rotate:  6, isLeft: true,  top: "62%", side: "5%",  dx: -28, dy: -24, floatDuration: "4.1s", floatDelay: "0.8s", width: 180, height: 120  },
  { src: "/services2.jpg", rotate:  5, isLeft: false, top: "14%", side: "4%",  dx:  28, dy:  24, floatDuration: "3.7s", floatDelay: "0.4s", width: 180, height: 120 },
  { src: "/services4.jpg", rotate: -5, isLeft: false, top: "65%", side: "6%",  dx:  28, dy: -24, floatDuration: "4.5s", floatDelay: "1.2s", width: 180, height: 120  },
];

const NAV_HEIGHT = 72;

export default function ITServicesPage() {
  const trackRef    = useRef<HTMLDivElement>(null);
  const mouseInside = useRef(false);
  const rafRef      = useRef<number>(0);
  const rawProgress = useRef(0);

  const [progress,     setProgress]     = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [floatImages, setFloatImages]   = useState(() => FLOAT_IMAGES);

  const p2           = Math.min(Math.max((progress - 0.12) / 0.5, 0), 1);
  const titleLeftPct = 50 - p2 * 26;
  const subtitleOp   = Math.max(0, 1 - progress * 9);
  const showSplit    = p2 > 0.5;

  const tick = useCallback(() => {
    setProgress(prev => {
      const target = rawProgress.current;
      const diff   = target - prev;
      if (Math.abs(diff) < 0.0005) return target;
      return prev + diff * 0.1;
    });
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const shuffleFloatImages = useCallback(() => {
    setFloatImages(prev => {
      const next = [...prev];
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  useEffect(() => {
    const handleWindowMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget && !(event as any).toElement) {
        shuffleFloatImages();
      }
    };

    const handleWindowMouseOver = (event: MouseEvent) => {
      if (!event.relatedTarget && !(event as any).fromElement) {
        shuffleFloatImages();
      }
    };

    window.addEventListener("mouseout", handleWindowMouseOut);
    window.addEventListener("mouseover", handleWindowMouseOver);
    return () => {
      window.removeEventListener("mouseout", handleWindowMouseOut);
      window.removeEventListener("mouseover", handleWindowMouseOver);
    };
  }, [shuffleFloatImages]);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const { top, height } = track.getBoundingClientRect();
      const vh        = window.innerHeight;
      const scrolled  = -top;
      const available = height - vh;
      const p = available > 0 ? Math.min(Math.max(scrolled / available, 0), 1) : 0;
      rawProgress.current = p;

      if (scrolled > 8) {
        setCardsVisible(false);
      } else if (scrolled <= 0 && mouseInside.current) {
        setCardsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    mouseInside.current = true;
    if (rawProgress.current < 0.05) setCardsVisible(true);
  };
  const handleMouseLeave = () => {
    mouseInside.current = false;
    setCardsVisible(false);
  };

  return (
    <main className="bg-background text-foreground">

      <style>{`
        @keyframes floatUpDown {
          0%   { translate: 0px 0px; }
          50%  { translate: 0px -14px; }
          100% { translate: 0px 0px; }
        }
      `}</style>

      <div
        ref={trackRef}
        style={{ height: "300vh", position: "relative" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{
          position: "sticky",
          top: NAV_HEIGHT,
          height: `calc(100vh - ${NAV_HEIGHT}px)`,
          overflow: "hidden",
          background: "var(--background)",
        }}>

          {/* ── Floating image cards ── */}
          {floatImages.map((img, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: img.width ?? (i % 2 === 0 ? 115 : 105),
                height: img.height ?? 95,
                top: img.top,
                [img.isLeft ? "left" : "right"]: img.side,
                borderRadius: 12,
                overflow: "hidden",
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible
                  ? `rotate(${img.rotate}deg) translate(0px, 0px)`
                  : `rotate(${img.rotate}deg) translate(${img.dx}px, ${img.dy}px)`,
                transition: cardsVisible
                  ? `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${i * 60}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${i * 60}ms`
                  : `opacity 0.35s cubic-bezier(0.23,1,0.32,1), transform 0.4s cubic-bezier(0.23,1,0.32,1)`,
                animation: cardsVisible
                  ? `floatUpDown ${img.floatDuration} ease-in-out ${img.floatDelay} infinite`
                  : "none",
                zIndex: 10,
                pointerEvents: "none",
                willChange: "transform, opacity",
              }}
            >
              <img
                src={img.src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.parentElement as HTMLDivElement).style.background =
                    "linear-gradient(135deg, #0d1b4b, #1a2d6e)";
                }}
              />
            </div>
          ))}

          {/* ── Left block ── */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: `${titleLeftPct}%`,
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            zIndex: 2,
            textAlign: "left",
            willChange: "left",
            marginLeft: "40px",
          }}>
            <h2 style={{
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              lineHeight: 1,
              color: "var(--foreground)",
              margin: 0,
            }}>
              <GradSpan>O</GradSpan>ur{" "}
              <GradSpan>S</GradSpan>ervic<GradSpan>e</GradSpan>s
            </h2>

            <div style={{
              marginTop: 10,
              fontSize: "clamp(20px, 3.2vw, 38px)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "var(--foreground)",
              opacity: showSplit ? 1 : 0,
              maxHeight: showSplit ? 160 : 0,
              overflow: "hidden",
              transition: "opacity 0.45s ease, max-height 0.45s ease",
            }}>
              Redefining possibilities<br />
              across{" "}
              <span style={{ color: "#E8192C" }}>the</span>{" "}
              globe
            </div>

            <a href="/contact" style={{
              display: "inline-block",
              marginTop: 20,
              fontSize: 12,
              color: "#00AEEF",
              textDecoration: "underline",
              letterSpacing: "0.05em",
              opacity: showSplit ? 1 : 0,
              transition: "opacity 0.4s ease 0.1s",
              pointerEvents: showSplit ? "auto" : "none",
            }}>
              GET IN TOUCH →
            </a>
          </div>

          {/* ── Subtitle ── */}
          <p style={{
            position: "absolute",
            left: "50%",
            bottom: "35%",
            transform: "translateX(-50%)",
            fontSize: 14,
            color: "var(--muted-foreground, #666)",
            textAlign: "center",
            whiteSpace: "nowrap",
            opacity: subtitleOp,
            zIndex: 2,
            pointerEvents: "none",
            margin: 0,
            padding: 0,
          }}>
            Driving innovation and improving lives with AI-driven intelligence.
          </p>

          {/* ── Right panel ── */}
          <div style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "46%",
            height: "100%",
            opacity: showSplit ? 1 : 0,
            transform: showSplit ? "translateY(0px)" : "translateY(28px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            zIndex: 3,
            pointerEvents: showSplit ? "auto" : "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "5%",
            paddingLeft: "2%",
          }}>
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                style={{
                  borderTop: "0.5px solid rgba(0,0,0,0.1)",
                  padding: "16px 0",
                  ...(i === SERVICES.length - 1
                    ? { borderBottom: "0.5px solid rgba(0,0,0,0.1)" }
                    : {}),
                }}
              >
                <div style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  marginBottom: 4,
                }}>
                  {s.title}
                </div>
                <p style={{
                  fontSize: 13,
                  color: "var(--muted-foreground, #555)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {s.desc}
                </p>
                <a href={s.href} style={{
                  display: "inline-block",
                  marginTop: 6,
                  fontSize: 11,
                  color: "#00AEEF",
                  textDecoration: "underline",
                  letterSpacing: "0.03em",
                }}>
                  LEARN MORE →
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── CTA ── */}
      <section className="py-16">
        <Container>
          <Reveal delayMs={0}>
            <div className="rounded-3xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold">Need help choosing?</div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Tell us what you're trying to achieve, and we'll recommend a
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

function GradSpan({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      backgroundImage: "linear-gradient(135deg, #44c8f8, #f13144)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>
      {children}
    </span>
  );
}