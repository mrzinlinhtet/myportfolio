import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Social = () => {
  return (
    <div className="fixed left-0 top-[270px] text-3xl flex flex-col justify-start gap-10 py-3 text-gray-600 dark:text-gray-400">
      <AiFillGithub />
      <AiFillLinkedin />
      <AiFillFacebook />
    </div>
  );
};

export default Social;
