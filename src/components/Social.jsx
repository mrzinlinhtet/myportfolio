import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="fixed left-0 ml-1 top-[350px] text-3xl flex flex-col justify-start gap-10 py-3 text-gray-600 dark:text-gray-400">
      <Link to="https://github.com/zinlinxtet">
        <AiFillGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/zinlinhtet/" >
        <AiFillLinkedin />
      </Link>
      <Link to="https://www.facebook.com/zinlinhtetofficial">
        <AiFillFacebook />
      </Link>
    </div>
  );
};

export default Social;
