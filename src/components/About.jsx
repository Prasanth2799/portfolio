import { CiUser } from "react-icons/ci"
import { FaCode, FaLaptopCode } from "react-icons/fa"

const About = () => {
  return (
    <div className="flex w-full flex-col p-2 min-h-screen">
        <div className="divider"></div>
  <div className="rounded-box grid h-20 place-items-center">
    <CiUser size={40}/>
    <h2 className="text-2xl"><span className="text-primary">About</span> Me</h2>
  </div>
   <p className="border border-blue-400 p-4 w-1/2 mx-auto">
      I am a dedicated Frontend Developer with experience in developing scalable and responsive web applications using React and modern JavaScript. I focus on writing clean, maintainable code and delivering smooth user experiences. I enjoy solving UI challenges and continuously upgrading my technical skill set.
    </p>
  <div className="grid h-24 place-items-center">
    <div className="flex">
      <div>
        <a href="#" className="hover-3d my-8 mx-2 cursor-pointer">
  <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div className="card-body">
      <FaLaptopCode className="text-blue-500 mx-auto" size={33}/>
      <>
      <p>The most modern and high-quality design made at a professional level.</p>
      </>
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</a>
      </div>
      <div>
        <a href="#" className="hover-3d my-8 mx-2 cursor-pointer">
  <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div className="card-body">
      <FaCode className="text-blue-500 mx-auto" size={33}/>
      <>
      <p>High-quality development of sites at the professional level.</p>
      </>
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</a>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  )
}

export default About