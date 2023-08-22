import Lottie from "lottie-react";
import myportfolio from "../lottie/myportfolio.json";
import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <>
      <h3
        id="about"
        className="md:text-3xl font-semibold dark:text-white text-center"
      >
        About
      </h3>
      <section className="text-center md:text-left md:flex w-full">
        <div className="">
          <Lottie animationData={myportfolio} className="w-full" loop={true} />
        </div>
        <div>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I was graduated with BE (IT) from Technological University
            (Mandalay). Transitioning from Telecom field, I have been working as
            a System Engineer about 1 year at Bliss Stock. Currently working at
            <span className="text-cyan-500"> Brycen Myanmar </span> as a Web
            Developer specialized in ReactJS and Laravel development.
          </p>
          <p className="text-md py-2 mb-6 leading-8 text-gray-800 dark:text-gray-200">
            In the dynamic IT landscape, I'm dedicated to continuous learning
            and innovation.
          </p>
          <a
            href="/ZinLinHtetCV.pdf"
            download
            className="mb-5 md:mb-0 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Download CV
            <BiDownload className="text-xl ms-2" />
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
