import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { projectsList } from "../data/portfolioData";
import Badge from "./ui/Badge";
import BentoCard from "./ui/BentoCard";
import SectionHeader from "./ui/SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected Portfolio"
          title="Shipped products built with"
          highlight="real-world rigor."
          description="A showcase of self-driven full-stack and AI-powered product engineering, blending clean architecture with intuitive UI design."
        />

        {/* Modular Projects Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {projectsList.map((project) => (
            <BentoCard
              key={project.id}
              className="flex flex-col justify-between overflow-hidden p-0"
              hover={true}
            >
              {/* Project Preview Image */}
              <div className="group/img relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-zinc-950">
                <img
                  src={project.photo}
                  alt={`${project.name} application preview`}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4">
                  <Badge variant={project.badgeType}>{project.badge}</Badge>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
                <div className="space-y-3.5 sm:space-y-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                      {project.name}
                    </h3>
                    <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 border-t border-white/[0.06] pt-3.5 sm:pt-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-zinc-400 sm:text-sm">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" size={12} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10.5px] sm:text-[11px] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 border-t border-white/[0.08] pt-5 sm:pt-6">
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white px-4 py-2 sm:px-5 sm:py-2.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-zinc-950 transition duration-200 hover:bg-zinc-200"
                  >
                    <span>Live Demo</span>
                    <MdArrowOutward size={14} className="sm:size-[15px]" />
                  </a>

                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 sm:px-5 sm:py-2.5 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-[0.14em] text-zinc-200 transition duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <FaGithub size={13} className="sm:size-[14px]" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
