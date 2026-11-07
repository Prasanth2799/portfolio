import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Icons = () => {
  return (
    <div className="flex items-center gap-5 p-2 text-center text-slate-200">
      <a
        href="https://github.com/Prasanth2799"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/lenka-prasanth-kumar/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="mailto:prasanthlenka2@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email"
        className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
      >
        <SiGmail size={22} />
      </a>
    </div>
  );
};

export default Icons;