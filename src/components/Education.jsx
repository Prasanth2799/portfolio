const Education = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative space-y-6 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-cyan-400/20">
        <div className="relative pl-10">
          <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
          </div>
          <div className="glass-card rounded-[1.75rem] p-6">
            <time className="text-sm uppercase tracking-[0.2em] text-cyan-300">2022</time>
            <h3 className="mt-3 text-2xl font-bold text-white">NxtWave CCBP 4.0 Intensive Program</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Completed a hands-on MERN stack development program, building strong practical skills in
              MongoDB, Express.js, React, and Node.js while working on full-stack web applications.
            </p>
          </div>
        </div>

        <div className="relative pl-10">
          <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
          </div>
          <div className="glass-card rounded-[1.75rem] p-6">
            <time className="text-sm uppercase tracking-[0.2em] text-cyan-300">2017 – 2020</time>
            <h3 className="mt-3 text-2xl font-bold text-white">B.Sc (MPC)</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Completed graduation in MPC and later transitioned into software development by building
              a foundation in analytical thinking and problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;