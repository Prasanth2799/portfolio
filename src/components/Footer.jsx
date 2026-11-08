import { MdKeyboardArrowUp } from "react-icons/md";
import { navItems, personalInfo } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] font-mono text-xs font-bold text-white">
                {personalInfo.monogram}
              </div>
              <span className="text-base font-bold text-white">{personalInfo.name}</span>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-zinc-400">
              Senior Frontend Developer crafting high-performance, accessible, and user-centric web products.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-[0.14em]" aria-label="Footer Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="transition duration-150 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-zinc-300 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <MdKeyboardArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-zinc-400 sm:flex-row">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed &amp; engineered with precision.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>All systems nominal · Built with React &amp; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
