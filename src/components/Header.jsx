import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const menuList = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Projects",
    },
    {
      id: 4,
      title: "Contact",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-[24px] font-bold text-black">
          ZIN <span className="text-[#1F6E8C]">LIN HTET</span>
        </h2>
      </div>
      <div className="hidden md:flex gap-4 ">
        {menuList.map((item) => (
          <div key={item.id}>
            <h2 className="btn-style">{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="hidden md:flex">
        <button className="btn-style">Hire Me</button>
      </div>
      <div className="md:hidden">
        {toggle ? (
          <RxHamburgerMenu
            onClick={() => setToggle(!toggle)}
            className="relative text-white text-[30px] cursor-pointer z-20"
          />
        ) : (
          <GiCrossMark
            onClick={() => setToggle(!toggle)}
            className="relative text-white text-[25px] cursor-pointer z-20"
          />
        )}
        <MenuOverlay toggle={toggle} menuList={menuList} />
      </div>
    </div>
  );
};

export default Header;
