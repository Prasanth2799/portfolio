import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaAws
} from "react-icons/fa"
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiSocketdotio,
  SiJsonwebtokens,
  SiFirebase
} from "react-icons/si"

const Skills = () => {
  return (
    <div className="text-center p-6 min-h-screen my-auto">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>

      <div className="flex flex-wrap justify-center gap-6">

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <FaHtml5 size={36} />
          <p className="mt-2 text-sm font-semibold">HTML</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <FaCss3Alt size={36} />
          <p className="mt-2 text-sm font-semibold">CSS</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <FaJs size={36} />
          <p className="mt-2 text-sm font-semibold">JavaScript</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <FaReact size={36} />
          <p className="mt-2 text-sm font-semibold">React</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <SiNextdotjs size={36} />
          <p className="mt-2 text-sm font-semibold">Next.js</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <FaBootstrap size={36} />
          <p className="mt-2 text-sm font-semibold">Bootstrap</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <FaNodeJs size={36} />
          <p className="mt-2 text-sm font-semibold">Node.js</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <SiExpress size={36} />
          <p className="mt-2 text-sm font-semibold">Express</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <SiMongodb size={36} />
          <p className="mt-2 text-sm font-semibold">MongoDB</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <p className="text-lg font-bold">M</p>
          <p className="mt-1 text-sm font-semibold">Mongoose</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <SiSocketdotio size={36} />
          <p className="mt-2 text-sm font-semibold">Socket.io</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <FaAws size={36} />
          <p className="mt-2 text-sm font-semibold">AWS</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <SiJsonwebtokens size={36} />
          <p className="mt-2 text-sm font-semibold">JWT</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <SiFirebase size={36} />
          <p className="mt-2 text-sm font-semibold">Firebase</p>
        </div>

        <div className="w-24 h-24 border border-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition">
          <p className="text-lg font-bold">API</p>
          <p className="mt-1 text-sm font-semibold">REST API</p>
        </div>

      </div>
    </div>
  )
}

export default Skills
