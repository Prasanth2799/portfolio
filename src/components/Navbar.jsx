import { useState } from "react";
import { MdClose, MdMenu, MdSend } from "react-icons/md";
import { navItems, personalInfo } from "../data/portfolioData";

const Navbar = ({ activeSection = "home" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-2xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Monogram & Name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2.5 sm:gap-3.5 transition duration-200"
          aria-label={`${personalInfo.name} - Home`}
        >
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] font-mono text-xs sm:text-sm font-bold tracking-tight text-white transition duration-300 group-hover:border-white/30 group-hover:bg-white/[0.12] group-hover:scale-105">
            {personalInfo.monogram}
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-base font-bold tracking-tight text-zinc-100 group-hover:text-white">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-400">
              {personalInfo.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 md:flex" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.15em] transition duration-200 ${
                  isActive
                    ? "bg-white text-zinc-950 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-mono font-medium uppercase tracking-[0.15em] text-zinc-200 transition duration-200 hover:border-white/30 hover:bg-white hover:text-zinc-950 sm:inline-flex"
          >
            <span>Let&apos;s Talk</span>
            <MdSend size={13} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <MdClose size={18} /> : <MdMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-b border-white/10 bg-zinc-950/95 px-5 py-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-mono uppercase tracking-[0.15em] transition ${
                    isActive
                      ? "bg-white text-zinc-950 font-semibold"
                      : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                </a>
              );
            })}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-zinc-950"
              >
                <span>Get in touch</span>
                <MdSend size={14} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
