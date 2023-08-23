const Skills = () => {
  const frontend = [
    {
      name: "HTML",
      progress: 88,
    },
    {
      name: "CSS",
      progress: 80,
    },
    {
      name: "JavaScript",
      progress: 75,
    },
    {
      name: "Bootstrap",
      progress: 90,
    },
    {
      name: "Tailwind",
      progress: 70,
    },
    {
      name: "React",
      progress: 60,
    },
    {
      name: "Vue",
      progress: 50,
    },
  ];

  const backend = [
    {
      name: "PHP",
      progress: 85,
    },
    {
      name: "Laravel",
      progress: 75,
    },
    {
      name: "MySQL",
      progress: 66,
    },
  ];

  const others = [
    {
      name: "Git & GitHub",
      progress: 75,
    },
  ];
  return (
    <>
      <h3
        id="skills"
        className="mt-5 md:text-3xl font-semibold dark:text-white text-center"
      >
        Skills
      </h3>
      <div className="flex gap-5 md:gap-0 flex-col md:flex-row">
        <div className="md:flex-1 md:mx-10">
          <h4 className="md:text-xl py-1 dark:text-white text-center">
            Frontend
          </h4>
          {frontend.map((item, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-cyan-700 dark:text-white">
                  {item.name}
                </span>
                <span className="text-sm font-medium text-cyan-700 dark:text-white">
                  {item.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-cyan-600 h-2.5 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex-1 md:mx-10">
          <h4 className="md:text-xl py-1 dark:text-white text-center">
            Backend
          </h4>
          {backend.map((item, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-cyan-700 dark:text-white">
                  {item.name}
                </span>
                <span className="text-sm font-medium text-cyan-700 dark:text-white">
                  {item.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-cyan-600 h-2.5 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}

          <h4 className="md:text-xl mt-10 py-1 dark:text-white text-center">
            Others
          </h4>
          {others.map((item, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-cyan-700 dark:text-white">
                  {item.name}
                </span>
                <span className="text-sm font-medium text-cyan-700 dark:text-white">
                  {item.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-cyan-600 h-2.5 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
