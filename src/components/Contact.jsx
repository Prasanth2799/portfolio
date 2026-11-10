import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import BentoCard from "./ui/BentoCard";
import CopyButton from "./ui/CopyButton";
import Icons from "./Icons";
import SectionHeader from "./ui/SectionHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          formRef.current?.reset();
          setStatus({
            type: "success",
            message: "Message received! Thank you for reaching out—I'll get back to you within 24 hours.",
          });
        },
        (error) => {
          console.error("Email send error:", error);
          setStatus({
            type: "error",
            message: `Could not send message automatically. Please write directly to ${personalInfo.email}.`,
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Initiate Contact"
          title="Have an exciting project or role"
          highlight="in mind?"
          description="Whether you are hiring for a senior frontend role, architecting a high-impact web product, or exploring AI workflows, let's talk."
        />

        {/* Split Bento Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Info Bento (5 cols) */}
          <BentoCard className="flex flex-col justify-between p-5 sm:p-7 lg:col-span-5">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Response within 24 hours</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  Let&apos;s build something remarkable together.
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400">
                  Available for full-time frontend roles, strategic consulting, and bespoke product
                  engineering.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-4">
                <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-400">
                  Direct Email:
                </span>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="break-all font-mono text-xs sm:text-sm font-semibold text-white hover:text-emerald-300"
                  >
                    {personalInfo.email}
                  </a>
                  <CopyButton text={personalInfo.email} label="Copy" copiedLabel="Copied!" />
                </div>
              </div>

              {/* Location Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-4">
                <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-400">
                  Location &amp; Work Model:
                </span>
                <p className="mt-1 font-mono text-xs text-zinc-200">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Block */}
            <div className="mt-6 sm:mt-8 border-t border-white/[0.08] pt-5 sm:pt-6">
              <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-400">
                Professional Networks:
              </span>
              <div className="mt-2.5 sm:mt-3">
                <Icons />
              </div>
            </div>
          </BentoCard>

          {/* Right Column: Contact Form Bento (7 cols) */}
          <BentoCard className="p-5 sm:p-7 lg:col-span-7">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="from_name" className="block font-mono text-xs uppercase tracking-[0.14em] text-zinc-300">
                    Your Name *
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    required
                    placeholder="e.g. Alex Rivera"
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-2.5 sm:px-4 sm:py-3 font-mono text-xs text-white placeholder-zinc-400 transition focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="from_email" className="block font-mono text-xs uppercase tracking-[0.14em] text-zinc-300">
                    Email Address *
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    required
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-2.5 sm:px-4 sm:py-3 font-mono text-xs text-white placeholder-zinc-400 transition focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-[0.14em] text-zinc-300">
                  Subject / Scope
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Senior Frontend Role / Full-Stack Project Collaboration"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-2.5 sm:px-4 sm:py-3 font-mono text-xs text-white placeholder-zinc-400 transition focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-[0.14em] text-zinc-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me a bit about your product, timelines, or role requirements..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-2.5 sm:px-4 sm:py-3 font-mono text-xs text-white placeholder-zinc-400 transition focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 sm:rows-5"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 sm:px-6 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-zinc-950 transition duration-200 hover:bg-zinc-200 disabled:opacity-50 sm:w-auto"
              >
                {sending ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane size={11} className="sm:size-[12px]" />
                  </>
                )}
              </button>

              {status.message && (
                <div
                  className={`mt-4 flex items-center gap-2.5 rounded-xl border p-3.5 sm:p-4 font-mono text-xs ${
                    status.type === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-300"
                  }`}
                  role="status"
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="shrink-0 text-emerald-400" size={14} />
                  ) : (
                    <FaExclamationCircle className="shrink-0 text-rose-400" size={14} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
