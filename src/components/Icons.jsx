import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
const Icons = () => {
  return (
    <div className="flex gap-10 p-2 my-2 text-center">
        <FaGithub size={40}/>
        <FaLinkedin size={40}/>
        <SiGmail size={40}/>
    </div>
  )
}

export default Icons