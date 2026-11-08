import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { educationData } from "../data/portfolioData";
import BentoCard from "./ui/BentoCard";

const Education = () => {
  return (
    <div className="space-y-6">
      {educationData.map((edu) => (
        <BentoCard key={edu.institution} className="relative overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                {edu.degree}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">{edu.institution}</h3>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs text-zinc-300 sm:self-auto">
              <FaGraduationCap size={13} className="text-zinc-400" />
              <span>{edu.period}</span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-zinc-300 sm:text-base">
            {edu.description}
          </p>

          <ul className="mt-4 space-y-2">
            {edu.achievements.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-400 sm:text-sm">
                <FaCheck className="mt-1 shrink-0 text-emerald-400" size={11} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-5">
            {edu.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
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
