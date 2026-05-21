"use client";

import { useRef } from "react";
import { DiMsqlServer } from "react-icons/di";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB]" size={48} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" size={48} />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E34F26]" size={48} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#1572B6]" size={48} />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E]" size={48} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" size={48} />,
  },
  {
    name: "MS SQL",
    icon: <DiMsqlServer className="text-[#CC2927]" size={48} />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="text-[#3ECF8E]" size={48} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28]" size={48} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791]" size={48} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" size={48} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8]" size={48} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#68A063]" size={48} />,
  },
];

export default function TechSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const items = [...techStack, ...techStack];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-hidden py-10">
      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center w-max"
          style={{
            animation: "techSlide 42s linear infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {items.map((tech, i) => (
            <div
              key={i}
              className="
                flex items-center gap-3
                px-14 py-5
                rounded-2xl
                hover:bg-white/[0.04]
                transition-all duration-300
                cursor-default
                select-none
              "
              style={{
                minWidth: "max-content",
              }}
            >
              <span className="flex-shrink-0">
                {tech.icon}
              </span>

              <span className="text-base md:text-lg font-medium text-slate-900/85 dark:text-white/80 tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes techSlide {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}