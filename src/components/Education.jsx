import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { educationData } from "../data/portfolioData";
import BentoCard from "./ui/BentoCard";

const Education = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {educationData.map((edu) => (
        <BentoCard key={edu.institution} className="relative overflow-hidden p-5 sm:p-8">
          <div className="flex flex-col justify-between gap-3 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-center sm:gap-4 sm:pb-6">
            <div>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-emerald-400">
                {edu.degree}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{edu.institution}</h3>
            </div>

            <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-300 sm:self-auto sm:px-3.5 sm:py-1.5 sm:text-xs">
              <FaGraduationCap size={12} className="text-zinc-400 sm:size-[13px]" />
              <span>{edu.period}</span>
            </div>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed text-zinc-300">
            {edu.description}
          </p>

          <ul className="mt-3.5 sm:mt-4 space-y-2">
            {edu.achievements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-zinc-400 sm:text-sm">
                <FaCheck className="mt-0.5 shrink-0 text-emerald-400" size={11} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4 sm:pt-5">
            {edu.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10.5px] sm:text-[11px] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </BentoCard>
      ))}
    </div>
  );
};

export default Education;
