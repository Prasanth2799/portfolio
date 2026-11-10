import { useState } from "react";
import { FaDownload, FaTerminal } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { personalInfo } from "../data/portfolioData";
import CopyButton from "./ui/CopyButton";
import Icons from "./Icons";

const codeTabs = [
  { id: "developer.ts", label: "developer.ts" },
  { id: "tech-stack.json", label: "tech-stack.json" },
  { id: "metrics.yml", label: "metrics.yml" },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("developer.ts");

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 sm:pt-20 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-full -translate-x-1/2 max-w-7xl opacity-30 blur-3xl">
        <div className="h-full w-full bg-gradient-to-r from-emerald-500/20 via-zinc-500/10 to-teal-500/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Bento Hero Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: 7 cols */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-7">
            {/* Availability Badge */}
            <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-normal text-emerald-300 min-[360px]:text-[9.5px] sm:gap-2 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-wider">
              <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 sm:h-2 sm:w-2" />
              </span>
              <span className="leading-tight">
                {personalInfo.availability}
              </span>
            </div>

            {/* Editorial Title */}
            <div className="space-y-2">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-zinc-100">{personalInfo.preferredName}</span>.
                <span className="block bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  Engineering scalable frontend systems.
                </span>
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400 sm:text-base sm:tracking-[0.2em]">
                {personalInfo.title} · MERN &amp; AI-Enabled Systems
              </p>
            </div>

            {/* Concise Description */}
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-lg">
              I turn complex software problems into clean, fast, and accessible digital products.
              Bringing <strong>4.5+ years of production experience</strong> across modern React,
              reusable component systems, and thoughtful AI workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1 sm:gap-3 sm:pt-2">
              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-950 transition duration-200 hover:bg-zinc-200 hover:shadow-lg sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.14em]"
              >
                <FaDownload size={11} className="sm:size-[13px]" />
                <span>Download Résumé</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-200 transition duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white sm:gap-2 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.14em]"
              >
                <span>Selected Work</span>
                <MdArrowOutward size={14} className="sm:size-[16px]" />
              </a>

              <CopyButton
                text={personalInfo.email}
                label="Copy Email"
                copiedLabel="Email Copied!"
              />
            </div>

            {/* Meta Row: Socials & Location */}
            <div className="flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-5 sm:gap-6 sm:pt-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 sm:text-xs sm:tracking-[0.18em]">
                  Network:
                </span>
                <Icons />
              </div>
              <div className="hidden h-4 w-px bg-zinc-800 sm:block" />
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 sm:text-xs sm:tracking-[0.18em]">
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 cols - Interactive Developer Showcase Bento */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/90 shadow-2xl backdrop-blur-2xl">
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-zinc-950/70 px-3 py-2 sm:px-3.5 sm:py-2">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-1">
                  {codeTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[10px] transition sm:text-[11px] ${
                        activeTab === tab.id
                          ? "bg-white/10 text-white font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <FaTerminal size={9} className="text-zinc-400" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Content */}
              <div className="p-3 font-mono text-[10.5px] leading-snug text-zinc-300 sm:p-4 sm:text-[11px] sm:leading-relaxed">
                {activeTab === "developer.ts" && (
                  <pre className="overflow-x-auto">
                    <code>
                      <span className="text-purple-400">export const</span>{" "}
                      <span className="text-blue-400">engineer</span>:{" "}
                      <span className="text-emerald-400">Profile</span> = &#123;
                      {"\n"}  <span className="text-zinc-400">name</span>:{" "}
                      <span className="text-amber-300">&quot;Lenka Prasanth Kumar&quot;</span>,
                      {"\n"}  <span className="text-zinc-400">role</span>:{" "}
                      <span className="text-amber-300">&quot;Senior Frontend Developer&quot;</span>,
                      {"\n"}  <span className="text-zinc-400">company</span>:{" "}
                      <span className="text-amber-300">&quot;Tata Consultancy Services&quot;</span>,
                      {"\n"}  <span className="text-zinc-400">experience</span>:{" "}
                      <span className="text-emerald-400">4.5</span>,{" "}
                      <span className="text-zinc-400">// years</span>
                      {"\n"}  <span className="text-zinc-400">focusDomain</span>:{" "}
                      <span className="text-amber-300">&quot;BFSI &amp; Enterprise Systems&quot;</span>,
                      {"\n"}  <span className="text-zinc-400">toolkit</span>: [
                      {"\n"}    <span className="text-amber-300">&quot;React 19&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;JavaScript&quot;</span>,
                      {"\n"}    <span className="text-amber-300">&quot;Tailwind&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;MongoDB&quot;</span>,
                      {"\n"}    <span className="text-amber-300">&quot;OpenAI API&quot;</span>
                      {"\n"}  ],
                      {"\n"}  <span className="text-zinc-400">status</span>:{" "}
                      <span className="text-emerald-400">&quot;Ready for impact&quot;</span>,
                      {"\n"}&#125;;
                    </code>
                  </pre>
                )}

                {activeTab === "tech-stack.json" && (
                  <pre className="overflow-x-auto">
                    <code>
                      &#123;
                      {"\n"}  <span className="text-purple-400">&quot;frontend&quot;</span>: [
                      {"\n"}    <span className="text-amber-300">&quot;React.js&quot;</span>, <span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;Redux Toolkit&quot;</span>,
                      {"\n"}    <span className="text-amber-300">&quot;Tailwind CSS&quot;</span>, <span className="text-amber-300">&quot;Responsive UI&quot;</span>
                      {"\n"}  ],
                      {"\n"}  <span className="text-purple-400">&quot;backend&quot;</span>: [
                      {"\n"}    <span className="text-amber-300">&quot;Node.js&quot;</span>, <span className="text-amber-300">&quot;Express.js&quot;</span>,
                      {"\n"}    <span className="text-amber-300">&quot;MongoDB&quot;</span>, <span className="text-amber-300">&quot;REST APIs&quot;</span>
                      {"\n"}  ],
                      {"\n"}  <span className="text-purple-400">&quot;ai_stack&quot;</span>: [
                      {"\n"}    <span className="text-amber-300">&quot;OpenAI API&quot;</span>, <span className="text-amber-300">&quot;GitHub Copilot&quot;</span>
                      {"\n"}  ]
                      {"\n"}&#125;
                    </code>
                  </pre>
                )}

                {activeTab === "metrics.yml" && (
                  <pre className="overflow-x-auto">
                    <code>
                      <span className="text-purple-400">experienceTrack:</span>
                      {"\n"}  <span className="text-zinc-400">organizations:</span>
                      {"\n"}    - <span className="text-amber-300">&quot;Tata Consultancy Services&quot;</span>
                      {"\n"}    - <span className="text-amber-300">&quot;Infosys&quot;</span>
                      {"\n"}  <span className="text-zinc-400">standards:</span>
                      {"\n"}    <span className="text-zinc-400">accessibility:</span> <span className="text-emerald-400">&quot;WCAG AA Compliant&quot;</span>
                      {"\n"}    <span className="text-zinc-400">performance:</span> <span className="text-emerald-400">&quot;90+ Lighthouse Score&quot;</span>
                      {"\n"}    <span className="text-zinc-400">architecture:</span> <span className="text-emerald-400">&quot;Atomic &amp; Modular&quot;</span>
                    </code>
                  </pre>
                )}
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-zinc-950/70 px-3 py-1.5 font-mono text-[10px] text-zinc-400 sm:px-3.5 sm:py-2 sm:text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Production Ready</span>
                </span>
                <span>UTF-8 · React 19</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modular Metrics Bento Row */}
        <div className="mt-10 sm:mt-16 grid gap-3 sm:gap-4 sm:grid-cols-3">
          {personalInfo.stats.map(({ value, label, detail }) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-zinc-900/70"
            >
              <div className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                {value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-zinc-200">{label}</div>
              <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-zinc-400">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
