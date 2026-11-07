const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-sm font-black tracking-[0.18em] text-cyan-200 shadow-lg shadow-cyan-500/20">
            PK
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">Prasanth Kumar</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-xl text-white">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box border border-white/10 bg-slate-900 p-2 shadow-2xl"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-slate-200 hover:text-cyan-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
