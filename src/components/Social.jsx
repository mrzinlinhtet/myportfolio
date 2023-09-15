import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="relative md:fixed top-[320px] md:left-6 md:top-[350px] text-3xl flex items-center justify-center md:flex-col md:justify-start gap-10 py-3 text-gray-600 dark:text-gray-400">
      <Link to="https://github.com/mrzinlinhtet">
        <AiFillGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/zinlinhtet" >
        <AiFillLinkedin />
      </Link>
      <Link to="https://www.facebook.com/mrzinlinhtet">
        <AiFillFacebook />
      </Link>
    </div>
  );
};

export default Social;
