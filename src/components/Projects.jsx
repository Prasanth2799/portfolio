import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { projectsList } from "../data/portfolioData";
import Badge from "./ui/Badge";
import BentoCard from "./ui/BentoCard";
import SectionHeader from "./ui/SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected Portfolio"
          title="Shipped products built with"
          highlight="real-world rigor."
          description="A showcase of self-driven full-stack and AI-powered product engineering, blending clean architecture with intuitive UI design."
        />

        {/* Modular Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
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
                <div className="absolute left-4 top-4">
                  <Badge variant={project.badgeType}>{project.badge}</Badge>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 border-t border-white/[0.06] pt-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-xs text-zinc-400 sm:text-sm">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" size={13} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-6">
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-zinc-950 transition duration-200 hover:bg-zinc-200"
                  >
                    <span>Live Demo</span>
                    <MdArrowOutward size={15} />
                  </a>

                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-zinc-200 transition duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <FaGithub size={14} />
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
