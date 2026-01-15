import { PHOTO_URL } from "../utils/constants"

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm px-2">
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
        <li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Home</li>
        <a href="#about"><li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">About</li></a>
        <li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Skills</li>
        <li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Projects</li>
        <li className="cursor-pointer hover:underline decoration-primary underline-offset-4 transition-all duration-200">Contact</li>
    </ul>    
  </div>
</div>
  )
}

export default Navbar