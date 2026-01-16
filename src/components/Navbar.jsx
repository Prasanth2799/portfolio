import { PHOTO_URL } from "../utils/constants"

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm px-2 sticky top-0 z-50">
  <div className="flex-1">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="profile-image"
            src={PHOTO_URL} />
        </div>
      </div>
    <a className="btn btn-ghost text-xl">Prasanth Kumar</a>
  </div>
  <div>
    <ul className="flex gap-4">
        <a href="#home"><li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Home</li></a>
        <a href="#about"><li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">About</li></a>
        <a href="#skills"><li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Skills</li></a>
        <a href="#projects"><li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Projects</li></a>
        <a href="#contact"><li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Contact</li></a>
    </ul>    
  </div>
</div>
  )
}

export default Navbar