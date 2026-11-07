import { useEffect, useState } from "react";
import { MdDownload, MdArrowForward } from "react-icons/md";
import Icons from "./Icons";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "AI-Enabled Product Engineer",
];

const stats = [
  { value: "4.5+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "Performance-first", label: "Engineering mindset" },
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-10 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.2),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.2),_transparent_28%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              AI-assisted development • Frontend engineering • Product focused
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="gradient-ink">Lenka Prasanth Kumar</span>
              </h1>

              <div className="flex min-h-12 items-center flex-wrap gap-2 text-xl font-semibold text-slate-200 sm:text-2xl">
                <span className="text-slate-400">My expertise:</span>
                <span className="gradient-ink transition-all duration-500">{roles[index]}</span>
              </div>
            </div>

            <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I design and build responsive, scalable, and high-performance web products using
              React, JavaScript, and modern frontend tooling, while bringing AI-assisted workflows,
              clean architecture, and strong UX thinking into delivery.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Lenka_Prasanth_Kumar_Full_Stack_Developer_Resume.pdf"
                download
                className="gradient-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                <MdDownload size={18} />
                Download CV
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-200"
              >
                View Projects
                <MdArrowForward size={18} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="stat-card rounded-2xl border bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-300">{value}</div>
                  <div className="mt-1 text-sm text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-10 flex justify-center">
          <Icons />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
