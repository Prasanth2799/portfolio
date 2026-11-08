const BentoCard = ({ children, className = "", hover = true, glow = false }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6 backdrop-blur-xl transition duration-300 ${
        hover
          ? "hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-black/60"
          : ""
      } ${
        glow ? "shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)]" : ""
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BentoCard;
