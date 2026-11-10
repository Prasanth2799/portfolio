import { createElement, useState } from "react";
import { MdSearch } from "react-icons/md";
import { skillCategories, skillsList } from "../data/portfolioData";
import SectionHeader from "./ui/SectionHeader";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skillsList.filter((skill) => {
    const matchesCategory =
      activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Toolkit &amp; Stack"
          title="Battle-tested tools for"
          highlight="production craft."
          description="A specialized technical toolkit refined across 4.5+ years of shipping enterprise web systems and modern AI-augmented applications."
        />

        {/* Filter Categories & Search Bar */}
        <div className="mb-8 sm:mb-10 flex flex-col items-stretch gap-3.5 md:flex-row md:items-center md:justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-1.5 backdrop-blur-xl">
            {skillCategories.map((category) => {
              const count =
                category.id === "all"
                  ? skillsList.length
                  : skillsList.filter((s) => s.category === category.id).length;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-2.5 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.12em] transition duration-200 ${
                    isActive
                      ? "bg-white text-zinc-950 font-bold shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[9px] sm:text-[10px] ${
                      isActive ? "bg-zinc-950/20 text-zinc-950" : "bg-white/10 text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <MdSearch
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-zinc-900/60 py-2 pl-9 pr-8 font-mono text-xs text-white placeholder-zinc-400 backdrop-blur-xl transition duration-200 focus:border-white/30 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex items-center gap-2.5 sm:gap-3.5 rounded-2xl border border-white/[0.08] bg-zinc-900/50 p-2.5 sm:p-3.5 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/80 hover:shadow-xl"
            >
              <div
                className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-200 group-hover:scale-105 group-hover:border-white/20 group-hover:text-white"
                style={{ "--brand-color": skill.color }}
              >
                {createElement(skill.icon, { size: 18, className: "sm:size-[21px]" })}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-bold text-zinc-200 group-hover:text-white sm:text-sm">
                  {skill.name}
                </div>
                <div className="truncate font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.08em] sm:tracking-[0.1em] text-zinc-400">
                  {skill.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredSkills.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/10 py-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-400">
              No skills found matching &quot;{searchQuery}&quot;
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 font-mono text-xs text-emerald-400 underline hover:text-emerald-300"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
