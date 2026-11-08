import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

const Icons = ({ className = "" }) => {
  const { socialLinks } = personalInfo;

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Social profiles">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile (opens in new tab)"
        className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
        title="GitHub"
      >
        <FaGithub size={18} />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile (opens in new tab)"
        className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
        title="LinkedIn"
      >
        <FaLinkedin size={18} />
      </a>

      <a
        href={socialLinks.email}
        aria-label="Send direct email"
        className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
        title="Email"
      >
        <SiGmail size={17} />
      </a>
    </div>
  );
};

export default Icons;
