import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../services/darkModeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl">developedbygamani</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={()=>dispatch(toggleDarkMode())}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
