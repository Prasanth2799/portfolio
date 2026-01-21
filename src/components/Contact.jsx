import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

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
    <section id="contact" className="bg-base-200 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          I’m open to opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a href="mailto:yourmail@gmail.com" className="text-3xl text-gray-400 hover:text-primary">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="text-3xl text-gray-400 hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-3xl text-gray-400 hover:text-primary">
            <FaLinkedin />
          </a>
        </div>

        {/* 👇 FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32"
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
