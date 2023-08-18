const About = () => {
  return (
    <section id="about" className="w-full min-h-screen pt-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">About</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I was graduated with BE (IT) from Technological University (Mandalay).
          Transitioning from Telecom field, I am now a Junior Web Developer at
          <span className="text-teal-500"> Brycen Myanmar. </span>
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I craft web solutions with a focus on user experience. In the dynamic
          IT landscape, I am dedicated to continuous learning and innovation.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <img src="./design.png" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img src="./code.png" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img src="./consulting.png" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
      </div>
    </section>
  );
};

export default About;
