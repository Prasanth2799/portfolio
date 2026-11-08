import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

const CopyButton = ({ text, label = "Copy", copiedLabel = "Copied!", className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-mono font-medium text-zinc-300 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white ${className}`}
      aria-label={copied ? copiedLabel : label}
      title={copied ? copiedLabel : label}
    >
      {copied ? (
        <>
          <FaCheck className="text-emerald-400" size={12} aria-hidden="true" />
          <span className="text-emerald-400">{copiedLabel}</span>
        </>
      ) : (
        <>
          <FaCopy className="text-zinc-400" size={12} aria-hidden="true" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;
