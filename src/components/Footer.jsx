import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Zin Lin Htet
              </span>
              <span className="self-center text-lg whitespace-nowrap dark:text-white">
                Web Developer
              </span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to="hero"
                  offset={-500}
                  smooth
                  spy
                  activeClass="active"
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
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
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
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
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 ZLH™ . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
