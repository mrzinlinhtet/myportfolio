import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../services/darkModeSlice";
import { Link } from "react-scroll";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="zlh3-modified.png"
            className="h-10 w-15 mr-3 rounded-3xl"
            alt="Flowbite Logo"
          />
          <span className="font-burtons self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className="text-[#1F6E8C] text-xl font-bold ">Gamani</span>
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-3xl ml-8"
          >
            <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="hero"
                offset={-500}
                smooth
                spy
                activeClass="active"
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                offset={-99}
                smooth
                spy
                activeClass="active"
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                offset={-99}
                smooth
                spy
                activeClass="active"
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                offset={-99}
                smooth
                spy
                activeClass="active"
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
