import { NavLink } from "react-router-dom";

const MenuOverlay = ({ toggle, setToggle }) => {
  return (
    <div
      className={`fixed left-0 min-h-full top-0 backdrop-blur-lg w-full text-center z-10 transition-all duration-300 ease-in-out
          ${
            toggle
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }
      `}
    >
      <ul className="flex justify-center gap-5 p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to={"/"} onClick={() => setToggle(!toggle)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"} onClick={() => setToggle(!toggle)}>
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
