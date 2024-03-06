import ProgressBar from "./ProgressBar/ProgressBar";

const Skills = () => {
  const frontend = [
    {
      name: "HTML",
      progress: "88%",
    },
    {
      name: "CSS",
      progress: "80%",
    },
    {
      name: "JavaScript",
      progress: "75%",
    },
    {
      name: "Bootstrap",
      progress: "90%",
    },
    {
      name: "Tailwind",
      progress: "70%",
    },
    {
      name: "React",
      progress: "60%",
    },
    {
      name: "Vue",
      progress: "50%",
    },
  ];

  const backend = [
    {
      name: "PHP",
      progress: "85%",
    },
    {
      name: "Laravel",
      progress: "75%",
    },
    {
      name: "Java",
      progress: "60%",
    },
  ];

  const others = [
    {
      name: "MySQL",
      progress: "70%",
    },
    {
      name: "Git & GitHub",
      progress: "75%",
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
            <ProgressBar
              key={index}
              label={item.name}
              visualParts={[
                {
                  percentage: item.progress,
                  color: "#1F6E8C",
                },
              ]}
            />
          ))}
        </div>
        <div className="md:flex-1 md:mx-10">
          <h4 className="md:text-xl py-1 dark:text-white text-center">
            Backend
          </h4>
          {backend.map((item, index) => (
            <ProgressBar
              key={index}
              label={item.name}
              visualParts={[
                {
                  percentage: item.progress,
                  color: "#1F6E8C",
                },
              ]}
            />
          ))}

          <h4 className="md:text-xl mt-10 py-1 dark:text-white text-center">
            Others
          </h4>
          {others.map((item, index) => (
            <ProgressBar
              key={index}
              label={item.name}
              visualParts={[
                {
                  percentage: item.progress,
                  color: "#1F6E8C",
                },
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
