import { createElement } from "react";
import { aboutHighlights } from "../data/portfolioData";
import BentoCard from "./ui/BentoCard";
import SectionHeader from "./ui/SectionHeader";

const focusKeywords = [
  "React 19",
  "Component Architecture",
  "JavaScript ESNext",
  "Node.js",
  "Tailwind CSS",
  "REST APIs",
  "MongoDB",
  "Core Web Vitals",
  "AI Prompt Workflows",
  "WCAG Accessibility",
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Craft &amp; Philosophy"
          title="Good software should feel"
          highlight="effortless."
          description="Bridging meticulous design sensibility with resilient engineering to create digital products that leave a lasting mark."
        />

        {/* Bento Grid Layout */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Main Story Bento: 7 cols */}
          <BentoCard className="flex flex-col justify-between p-5 sm:p-7 lg:col-span-7">
            <div className="space-y-3.5 sm:space-y-4">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-emerald-400">
                The Background
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
                Engineering with empathy and systematic precision.
              </h3>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                I am a frontend-focused MERN developer with <strong>4.5+ years of enterprise experience</strong>{" "}
                delivering robust digital solutions for Fortune 500 organizations across BFSI,
                manufacturing, and fintech domains.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                From translating high-fidelity design prototypes into modular, accessible component
                hierarchies, to optimizing rendering pipelines and integrating modern AI APIs, I care
                deeply about every micro-interaction and every line of maintainable code.
              </p>
            </div>

            {/* Keyword Pills */}
            <div className="mt-6 sm:mt-8 border-t border-white/[0.08] pt-5 sm:pt-6">
              <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-400">
                Core Competencies &amp; Stack:
              </span>
              <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                {focusKeywords.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition duration-150 hover:border-white/20 hover:text-white sm:px-3 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* 4 Pillar Highlight Bentos: 5 cols */}
          <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {aboutHighlights.map(({ icon, title, description, accent }) => (
              <BentoCard key={title} className="group relative overflow-hidden p-4 sm:p-5">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                />
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-zinc-200 transition group-hover:scale-105 group-hover:border-white/20 group-hover:text-white">
                    {createElement(icon, { size: 18, className: "sm:size-[19px]" })}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white sm:text-base">{title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">{description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
