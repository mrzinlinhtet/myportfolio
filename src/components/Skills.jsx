const Skills = () => {
  const progressHTML = 88;
  const progressCSS = 80;
  const progressJavaScript = 75;
  const progressBootstrap = 90;
  const progressTailwind = 75;
  const progressReact = 60;
  const progressVue = 50;
  const progressPHP = 85;
  const progressLaravel = 75;
  const progressMySQL = 66;
  const progressGit = 75;

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
          <h4 className="md:text-xl py-1 dark:text-white text-center">Frontend</h4>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                HTML
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressHTML}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressHTML}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                CSS
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressCSS}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressCSS}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                JavaScript
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressJavaScript}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressJavaScript}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                Bootstrap
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressBootstrap}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressBootstrap}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                Tailwind
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressTailwind}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressTailwind}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                React
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressReact}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressReact}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                Vue
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressVue}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressVue}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 md:mx-10">
          <h4 className="md:text-xl py-1 dark:text-white text-center"> Backend </h4>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                PHP
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressPHP}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressPHP}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                Laravel
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressLaravel}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressLaravel}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                MySQL
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressMySQL}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressMySQL}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
          <h4 className="md:text-xl py-1 dark:text-white text-center">Others</h4>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-cyan-700 dark:text-white">
                Git & Github
              </span>
              <span className="text-sm font-medium text-cyan-700 dark:text-white">
                {progressGit}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-cyan-600 h-2.5 rounded-full"
                style={{ width: `${progressGit}%` }} // Use double curly braces for inline styles
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
