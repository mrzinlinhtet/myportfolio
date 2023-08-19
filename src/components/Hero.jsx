import { BsMouse } from "react-icons/bs";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="w-full min-h-screen">
      <div className="flex p-10 py-10 justify-center items-center">
        <div className="flex-1">
          <h2 className="text-5xl -tracking-wider py-2 text-[#1F6E8C] font-medium md:text-5xl mb-3">
            Hello, I'm ZLH (Gamani).
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Web Developer
          </h3>
          <p className="text-md leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
            I craft web solutions with a focus on user experience.
          </p>
        </div>
        <div className="flex-1 mx-auto bg-white rounded-full overflow-hidden mt-5 md:h-96 md:w-96">
          <img
            src="/zlh.jpg"
            alt=""
            className="w-full h-full object-contain shadow-2xl bg-gradient-to-t from-[#1F6E8C] to-[#ffffff]"
          />
        </div>
      </div>
      <Link
        to="about"
        offset={-99}
        smooth
        spy
        activeClass="active"
        className="cursor-pointer mr-4 hover:underline md:mr-6 flex justify-center"
      >
        <BsMouse className="text-4xl animate-bounce text-cyan-700"/>
      </Link>
    </section>
  );
};

export default Hero;
