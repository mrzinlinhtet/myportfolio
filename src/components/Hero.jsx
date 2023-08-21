import { BsMouse } from "react-icons/bs";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full mb-[70px] md:mb-0 md:min-h-screen mt-10"
    >
      <div className="flex flex-col md:flex-row p-10 py-10 justify-center items-center">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:-tracking-wider py-2 text-[#1F6E8C] font-medium md:text-5xl mb-3">
            Hello, I'm ZLH (Gamani).
          </h2>
          <h3 className="text-xl py-2 dark:text-white md:text-3xl">
            Web Developer
          </h3>
          <p className="text-md leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
            Craft web solutions with a focus on user experience.
          </p>
        </div>
        <div className="flex-1 md:block mx-auto bg-white rounded-full overflow-hidden mt-5 md:h-96 md:w-96">
          <img src="/zlh.jpg" alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
      <Link
        to="about"
        offset={-99}
        smooth
        spy
        activeClass="active"
        className="cursor-pointer mr-4 hover:underline md:mr-6 md:flex justify-center hidden"
      >
        <BsMouse className="text-4xl animate-bounce text-cyan-700" />
      </Link>
    </section>
  );
};

export default Hero;
