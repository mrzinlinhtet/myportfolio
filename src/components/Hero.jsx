const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
      <div className="mb-10">
        <p className="text-white text-[13px]">
          HELLO THERE, WELCOME TO MY SITE
        </p>
        <p className="text-white text-[40px] font-bold">I'm Zin Lin Htet</p>
        <p className="text-[40px] font-bold text-[#1F6E8C]">
          I'm a Web Developer
        </p>
        <div className="mt-4 flex gap-4">
          <button className="btn-style">SEE PORTFOLIO</button>
          <button className="btn-style">CONTACT ME</button>
        </div>
      </div>
      <div className="flex justify-center md:hidden"></div>
      <div className=" h-[370px] w-[400px] rounded-[20px] p-2 bg-gradient-to-t from-[#1F6E8C] to-[#ffffff]">
        <img
          src="./zlh3.png"
          className="h-full w-[400px] object-cover rounded-[20px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
