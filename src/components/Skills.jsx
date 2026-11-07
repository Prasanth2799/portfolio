import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiSocketdotio,
  SiJsonwebtokens,
  SiFirebase,
  SiOpenai,
  SiGithubcopilot,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mongoose", icon: "M" },
  { name: "REST APIs", icon: "API" },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "AWS", icon: FaAws },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "Firebase", icon: SiFirebase },
  { name: "GitHub Copilot", icon: SiGithubcopilot },
  { name: "LLM API Integration", icon: SiOpenai },
  { name: "AI-assisted Development", icon: FaGithub },
  { name: "Code Review", icon: "CR" },
  { name: "Responsive Design", icon: "R" },
];

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tools and technologies I use to build products
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex min-h-24 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-3 text-left shadow-sm shadow-blue-950/5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-900/10 sm:gap-4 sm:p-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                {typeof Icon === "string" ? (
                  <span className="text-sm font-black">{Icon}</span>
                ) : (
                  <Icon size={22} />
                )}
              </div>
              <p className="text-sm font-semibold leading-5 text-slate-800 sm:text-base">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
