const Navbar = () => {
  return (
    <div className="">
      <ul className="flex text-white text-2xl gap-1 mt-5 flex-col font-semibold justify-end items-end">
        <li>
          <a href="">
            <button className="btn btn-outline btn-circle btn-xs">1</button>
          </a>
        </li>
        <li>
          <a href="#about">
            <button className="btn btn-outline btn-circle btn-xs">2</button>
          </a>
        </li>

        <li>
          <a href="#thisYear">
            <button className="btn btn-outline btn-circle btn-xs">3</button>
          </a>
        </li>
        <li>
          <a href="">
            <button className="btn btn-outline btn-circle btn-xs">4</button>
          </a>
        </li>
        <li>
          <a href="#skills">
            <button className="btn btn-outline btn-circle btn-xs">5</button>
          </a>
        </li>
        <li>
          <a href="">
            <button className="btn btn-outline btn-circle btn-xs">6</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
