const Experience = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative space-y-6 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-cyan-400/20">
        <div className="relative pl-10">
          <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
          </div>
          <div className="glass-card rounded-[1.75rem] p-6">
            <time className="text-sm uppercase tracking-[0.2em] text-cyan-300">July 2026 – Present</time>
            <h3 className="mt-3 text-2xl font-bold text-white">Tata Consultancy Services</h3>
            <p className="mt-2 text-lg text-slate-200">Senior Frontend Developer</p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Working in the BFSI domain, delivering modern frontend solutions with a strong focus on
              user experience, performance, accessibility, and maintainable component architecture.
              I contribute to scalable product development while collaborating closely with product,
              design, and engineering teams to ship robust digital experiences.
            </p>
          </div>
        </div>

        <div className="relative pl-10">
          <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
          </div>
          <div className="glass-card rounded-[1.75rem] p-6">
            <time className="text-sm uppercase tracking-[0.2em] text-cyan-300">May 2022 – July 2026</time>
            <h3 className="mt-3 text-2xl font-bold text-white">Infosys</h3>
            <p className="mt-2 text-lg text-slate-200">Senior Systems Associate – Frontend Developer</p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Built and enhanced frontend experiences for financial and manufacturing business units,
              focusing on responsive interfaces, business workflow optimization, and clean user-facing
              implementations. Worked across enterprise product requirements to improve usability,
              operational efficiency, and delivery quality while supporting smooth day-to-day application usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
