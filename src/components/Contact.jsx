import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          I’m open to opportunities, collaborations, or just a friendly chat.
          Feel free to reach out.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="mailto:yourmail@gmail.com"
            className="text-3xl text-gray-400 hover:text-primary transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-3xl text-gray-400 hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-3xl text-gray-400 hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />

          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32"
          />

          <button className="btn btn-primary w-full">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
