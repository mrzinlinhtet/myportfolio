import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Error = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="">
      <section id="projects" className={darkMode ? "dark" : ""}>
        <Navbar />
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-10 mt-18 pt-20">
          <div className="flex justify-center items-center">
            <img src="404.svg" alt="" className="w-1/2"/>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Error;
