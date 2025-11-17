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
            I was graduated with BE in Information Technology from Technological University
            (Mandalay). Transitioning from Telecom field, where I have 3 years of experience, I have been working as
            a Web Developer for about 3 years using Java. Currently working at
            <span className="text-cyan-500"> Human Resocia </span> as a Web
            Developer specialized in Java development.
          </p>
          <p className="text-md py-2 mb-6 leading-8 text-gray-800 dark:text-gray-200">
            In the dynamic IT landscape, I&apos;m dedicated to continuous learning
            and innovation.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
