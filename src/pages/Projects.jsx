import { useSelector } from "react-redux";
import { BsFileArrowUpFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-up";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiLiveLine } from "react-icons/ri";

const Projects = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const projects = [
    {
      project_name: "Food Ordering System for Darli Snacks and Drinks",
      project_img: "fos-php.jpeg",
      project_type: "Pure PHP MVC Project",
      use_lang: "MySQL",
      duration: "Duration: 5 weeks",
      project_link: "https://github.com/zinlinxtet/FOS",
      live: "",
    },
    {
      project_name: "Employee Management System",
      project_img: "ems-laravel.png",
      project_type: "Laravel MVC Project",
      use_lang: "MySQL",
      duration: "Duration: 4 weeks",
      project_link: "https://github.com/zinlinxtet/employee-reg-laravel7-v2",
      live: "",
    },
    {
      project_name: "Gamani Store - ecommerce",
      project_img: "gamanistore.png",
      project_type: "Testing React Project",
      user_lang: "",
      duration: "Duration: 2 days",
      project_link: "https://github.com/zinlinxtet/ecommerce-proj",
      live: "https://gamani-store.vercel.app",
    },
    {
      project_name: "Contact App",
      project_img: "contactapp.png",
      project_type: "Testing React Project",
      user_lang: "",
      duration: "Duration: 2 days",
      project_link: "https://github.com/zinlinxtet/recontact-app-proj",
      live: "https://recontact-app.vercel.app/",
    },
    {
      project_name: "Foodie Shop",
      project_img: "foodieshop.png",
      project_type: "Testing React Project",
      user_lang: "",
      duration: "Duration: 2 days",
      project_link: "https://github.com/zinlinxtet/foodie",
      live: "https://foodie-shop.vercel.app/",
    },
  ];

  return (
    <div className="mt-14">
      <section id="projects" className={darkMode ? "dark" : ""}>
        <main className="pb-14 bg-white dark:bg-gray-900 md:px-20 lg:px-10 min-h-screen mt-7 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
            {projects.map((item, index) => (
              <div
                className="pt-10 mx-5 transform delay-75 transition hover:scale-105"
                key={index}
              >
                <div className="rounded overflow-hidden shadow-lg max-w-sm h-[400px] w-[300px] flex flex-col justify-between">
                  <img
                    className="w-full h-[150px]"
                    src={item.project_img}
                    alt=""
                  />

                  <div className="font-bold px-6 py-4 text-xl mb-2 text-gray-700 dark:text-gray-400">
                    {item.project_name.length > 20
                      ? item.project_name.slice(0, 20) + "....."
                      : item.project_name}
                  </div>
                  <div className="px-6">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.project_type}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.use_lang}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.duration}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 mb-5">
                    <Link
                      to={item.project_link}
                      className="inline-flex items-center mx-3 px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
                    {/* live button add */}
                    {item.live != "" && (
                      <Link
                        to={item.live}
                        className="inline-flex items-center mx-3 px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <ScrollToTop showUnder={160}>
          <BsFileArrowUpFill className="text-5xl text-cyan-500 mr-1" />
        </ScrollToTop>
      </section>
    </div>
  );
};

export default Projects;
