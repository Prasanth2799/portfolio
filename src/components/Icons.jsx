import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
const Icons = () => {
  return (
    <div className="flex gap-10 p-2 m-4 text-center">
        <a href="https://github.com/Prasanth2799" target="_blank"><FaGithub size={40}/></a>
        <a href="https://www.linkedin.com/in/lenka-prasanth-kumar/" target="_blank"><FaLinkedin size={40}/></a>
        <a href="mailto:prasanthlenka2@gmail.com" target="_blank"
  rel="noopener noreferrer"
  aria-label="Send email"><SiGmail size={40}/></a>
    </div>
  )
}

export default Icons