import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 my-auto">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col md:mx-10">
              <span className="self-center text-gray-500 text-2xl font-semibold whitespace-nowrap dark:text-white">
                Zin Lin Htet
              </span>
              <span className="self-center text-gray-500 text-lg whitespace-nowrap dark:text-white">
                Web Developer
              </span>
              <span className="my-3 md:my-0 self-center text-gray-500 text-xs whitespace-nowrap dark:text-white">
                devzinlinhtet@gmail.com
              </span>
            </div>
            <ul className="md:mx-10 flex flex-wrap text-center justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to="hero"
                  offset={-500}
                  smooth
                  spy
                  activeClass="active"
                  className="cursor-pointer mx-2 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  offset={-99}
                  smooth
                  spy
                  activeClass="active"
                  className="cursor-pointer mx-2 hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  offset={-99}
                  smooth
                  spy
                  activeClass="active"
                  className="cursor-pointer mx-2 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="flex justify-center md:block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 ZLH . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
