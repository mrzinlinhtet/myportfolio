import { useSelector } from "react-redux";
import Social from "../components/Social";
import { BsFileArrowUpFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-up";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiLiveLine } from "react-icons/ri";

const Projects = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="mt-14">
      <section id="projects" className={darkMode ? "dark" : ""}>
        <Social />
        <main className=" bg-white dark:bg-gray-900 md:px-20 lg:px-10 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 justify-items-center ">
            {/* 1st card */}
            <div className="pt-10 mx-10 transform delay-75 transition hover:scale-105">
              <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <img className="w-full" src="fos-php.jpeg" alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-400">
                    Food Ordering System for Darli Snacks and Drinks
                  </div>
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
            </div>

            <div className="pt-10 mx-10 transform delay-75 transition hover:scale-105">
              <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <img className="w-full" src="ems-laravel.png" alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-400">
                    Employee Management System
                  </div>
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
            </div>

            <div className="pt-10 mx-10 transform delay-75 transition hover:scale-105">
              <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <img className="w-full" src="comingsoon.png" alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-400">
                    Gamani Store - ecommerce
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    React Project
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Duration: 2 days
                  </p>
                  <div className="flex justify-between">
                    <Link
                      to="https://github.com/zinlinxtet/ecommerce-proj"
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
                    <Link
                      to="https://gamani-store.vercel.app"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                      <RiLiveLine className="text-xl me-3" />
                      LIVE
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
