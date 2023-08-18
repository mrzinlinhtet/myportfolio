const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen pt-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance developer, I've done
          remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src="./web1.png"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src="./web2.png"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src="./web3.png"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src="./web4.png"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src="./web5.png"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src="./web6.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
