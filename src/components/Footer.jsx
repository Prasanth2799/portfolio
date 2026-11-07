import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Lenka Prasanth Kumar</h2>
          <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">
            Frontend-focused MERN developer building modern, responsive digital experiences.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#about" className="transition hover:text-cyan-300">About</a></li>
            <li><a href="#projects" className="transition hover:text-cyan-300">Projects</a></li>
            <li><a href="#skills" className="transition hover:text-cyan-300">Skills</a></li>
            <li><a href="#contact" className="transition hover:text-cyan-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
          <div className="mt-2 flex items-center gap-3 text-slate-300">
            <a href="https://github.com/Prasanth2799" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub</a>
            <span className="text-slate-500">•</span>
            <a href="https://www.linkedin.com/in/lenka-prasanth-kumar/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
            <span className="text-slate-500">•</span>
            <a href="mailto:prasanthlenka2@gmail.com" className="transition hover:text-cyan-300">Email</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Lenka Prasanth Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
