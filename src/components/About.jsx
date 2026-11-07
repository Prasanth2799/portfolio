import { createElement } from "react";
import { FaCode, FaLaptopCode, FaRocket, FaBrain } from "react-icons/fa";

const highlights = [
  {
    icon: FaLaptopCode,
    title: "UI-first thinking",
    text: "I design interfaces that are intuitive, polished, and built around real user behavior.",
  },
  {
    icon: FaCode,
    title: "Clean implementation",
    text: "I focus on maintainable architecture, reusable components, and scalable frontend systems.",
  },
  {
    icon: FaBrain,
    title: "AI-assisted delivery",
    text: "I apply LLM workflows, AI-assisted coding patterns, and prompt-driven productivity to speed up development while preserving quality.",
  },
  {
    icon: FaRocket,
    title: "Performance-oriented",
    text: "Every build is optimized for responsiveness, speed, and a smooth product experience.",
  },
];

const About = () => {
  return (
    <section id="about" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About me</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Building thoughtful products with <span className="text-cyan-300">practical precision</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m a frontend-focused MERN developer with a strong interest in creating responsive,
              high-quality web applications that balance performance, usability, and design.
              From crafting user interfaces to building scalable app logic, I enjoy turning ideas
              into polished experiences that feel seamless for real users.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript",
                "Node.js",
                "MongoDB",
                "Tailwind",
                "REST APIs",
                "Responsive Design",
                "Problem Solving",
                "Code Review",
                "AI-assisted Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-sm font-medium text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {highlights.map(({ icon, title, text }) => (
              <div key={title} className="glass-card rounded-[1.5rem] p-5">
                <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  {createElement(icon, { size: 26 })}
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;