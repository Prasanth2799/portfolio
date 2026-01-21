import { PHOTO_URL } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm px-2 sticky top-0 z-50">
            <div className="navbar-start">
        <div className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="profile-image" src={PHOTO_URL} />
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Prasanth Kumar</a>
      </div>
      <div className="navbar-end">
                <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal hidden lg:flex gap-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
