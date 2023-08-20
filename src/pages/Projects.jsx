import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import { BsFileArrowUpFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-up";
import { BsGithub } from "react-icons/bs";
import {Link} from 'react-router-dom';

const Projects = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="">
      <section id="projects" className={darkMode ? "dark" : ""}>
        <Navbar />
        <Social />
        <main className=" bg-white mt-10 h-screen px-10 dark:bg-gray-900 md:px-20 lg:px-10">
          <div className="flex px-10 py-20 gap-16">
            <div className="transform duration-300 translate-x-10 hover:scale-105 shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="fos-php.jpeg" alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Food Ordering System for Darli Snacks and Drinks
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Pure PHP MVC Project
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  MySQL
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Duration: 5 weeks
                </p>
                <Link
                  to="https://github.com/zinlinxtet/FOS"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  <BsGithub className="text-xl me-3" />
                  CODE
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="transform duration-300 translate-x-10 hover:scale-105 shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="ems-laravel.png" alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Employee Management System
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Laravel MVC Project
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  MySQL
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Duration: 4 weeks
                </p>
                <Link
                  to="https://github.com/zinlinxtet/employee-reg-laravel7-v2"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  <BsGithub className="text-xl me-3" />
                  CODE
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="transform duration-300 translate-x-10 hover:scale-105 shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="comingsoon.png" alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Coming soon
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  xxxxxxxxxxxx
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  xxxxxxxxxxxx
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Duration: xx weeks
                </p>
                <Link
                  to=""
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  <BsGithub className="text-xl me-3" />
                  CODE
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <ScrollToTop showUnder={160}>
          <BsFileArrowUpFill className="text-4xl text-cyan-500 mr-3" />
        </ScrollToTop>
      </section>
    </div>
  );
};

export default Projects;
