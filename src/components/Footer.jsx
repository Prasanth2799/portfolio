import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white">
            Lenka Prasanth Kumar
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Frontend-Focused MERN Developer • React • Tailwind • JavaScript • Node.js • MongoDB 
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect
          </h3>
          <div className="flex gap-4">
            <Icons />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Lenka Prasanth Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
