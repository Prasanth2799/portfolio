const variantStyles = {
  default: "border-white/10 bg-white/[0.04] text-zinc-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  purple: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  outline: "border-zinc-700 bg-transparent text-zinc-400",
};

const Badge = ({ children, variant = "default", size = "sm", className = "" }) => {
  const sizeStyle = size === "xs" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono font-medium uppercase tracking-[0.12em] transition-colors ${variantStyles[variant] || variantStyles.default} ${sizeStyle} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
