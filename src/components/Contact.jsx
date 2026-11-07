import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Icons from "./Icons";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Let&apos;s build something great together</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
            I&apos;m open to opportunities, collaborations, and meaningful conversations around product design and web development.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <Icons />
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="mx-auto max-w-2xl space-y-5 rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            className="h-36 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
