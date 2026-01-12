import { useEffect, useState } from "react";
import Icons from "./Icons";

const roles = [
  "Frontend Developer",
  "Node.js Developer",
  "MERN Stack Developer",
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m Lenka Prasanth Kumar
          </h1>

           <h2 className="text-2xl font-semibold text-primary mt-3">
            {roles[index]}
          </h2>

          <p className="py-6 text-base text-gray-400">
            I build responsive and user-friendly web applications using
            React, JavaScript, and modern UI frameworks. I enjoy turning
            complex problems into simple, elegant solutions.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/Lenka_Prasanth_Kumar_FE_Resume.pdf"
              download
              className="btn btn-primary"
            >
              Download CV
            </a>

            <button className="btn btn-outline">
              View Projects
            </button>
          </div>         
        </div>
        <Icons /> 
      </div>
    </div>
  );
};

export default HomePage;
