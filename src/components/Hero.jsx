import Lottie from "lottie-react";
import myportfolio from "../lottie/myportfolio.json";

const Hero = () => {
  return (
    <section id="hero" className="w-full min-h-screen">
      <div className="flex p-10 py-10">
        <div className="flex-1">
          <h2 className="text-5xl tracking-widest py-2 text-[#1387B5] font-medium md:text-5xl mb-3">
            Continuous learning and innovation
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Zin Lin Htet (Gamani)
          </h3>
          <p className="text-md leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
            Web Developer
          </p>
        </div>
        <div className="flex-1 object-cover mx-auto bg-white rounded-full relative overflow-hidden mt-5 md:h-96 md:w-96">
          <Lottie animationData={myportfolio} className="w-full" loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
