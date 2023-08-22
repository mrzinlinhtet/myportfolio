import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossMark } from "react-icons/gi";
import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../services/darkModeSlice";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 dark:text-white fixed w-full mb-30 z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4 ">
          <div className="">
            <NavLink to={"/"} onClick={scrollToTop} className="flex">
              <img
                src="zlh3-modified.png"
                className="h-10 w-15 mr-3 rounded-3xl hidden md:block"
                alt="Flowbite Logo"
              />
              <span className="font-burtons self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <span className="text-[#1F6E8C] text-xl font-bold ">
                  Gamani
                </span>
              </span>
            </NavLink>
          </div>
          <div className="hidden md:flex gap-4 ">
            <ul className="flex justify-center gap-5 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/projects"}>Projects</NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-2 py-1 md:px-4 md:py-2 border-none rounded-3xl"
            >
              <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
            </button>
          </div>
          <div className="md:hidden">
            {toggle ? (
              <RxHamburgerMenu
                onClick={() => setToggle((prev) => !prev)}
                className="relative text-gray-500 text-[30px] cursor-pointer z-20"
              />
            ) : (
              <GiCrossMark
                onClick={() => setToggle((prev) => !prev)}
                className="relative text-gray-500 text-[25px] cursor-pointer z-20 mt-1"
              />
            )}
            <MenuOverlay toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
