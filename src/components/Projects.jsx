import { MdArrowOutward, MdCode } from "react-icons/md";

const projectConfig = [
  {
    id: 1,
    name: "Dev Connect",
    photo: "/Dev Connect.png",
    description: "A developer networking platform designed to help users share profiles, collaborate, and discover opportunities in the tech community.",
    live_link: "https://www.dev-connectcom.site/login",
    github_url: "https://github.com/Prasanth2799/devConnect",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    name: "Netflix GPT",
    photo: "/Netflix GPT.png",
    description: "A movie discovery experience with AI-powered recommendations and a clean streaming-inspired interface built for fast browsing and better engagement.",
    live_link: "https://moviz-gpt-lpk99.netlify.app/",
    github_url: "https://github.com/Prasanth2799/netflix-gpt",
    stack: ["React", "Redux", "OpenAI", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Self-driven product work built with <span className="text-cyan-300">real-world thinking</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projectConfig.map((project) => (
            <article key={project.id} className="glass-card overflow-hidden rounded-[2rem] p-4">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/50">
                <img
                  src={project.photo}
                  alt={`${project.name} preview`}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Product Build
                  </span>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
                  >
                    <MdArrowOutward size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                  >
                    <MdCode size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;