const SectionHeader = ({ eyebrow, title, highlight, description, align = "center" }) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-8 sm:mb-14 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] sm:tracking-[0.22em] text-zinc-400 ${isCenter ? "mx-auto" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="mt-3 sm:mt-4 text-2xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
