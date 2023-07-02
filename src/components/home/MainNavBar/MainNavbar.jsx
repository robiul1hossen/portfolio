import { FaBars } from "react-icons/fa";

const MainNavbar = () => {
  return (
    <div>
      <div className="navbar bg-[#333] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Download Resume</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar top-3 text-2xl cursor-pointer">
              <div className="w-10">
                <FaBars></FaBars>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52"
            >
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="">Download Resume</a>
              </li>
              <li>
                <a href="">View Resume</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#thisYears">This Year</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
