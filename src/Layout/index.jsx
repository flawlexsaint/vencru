import { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Logo from "../Assets/Images/Logo.svg";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <div className="flex items-center justify-between px-6 py-4 border-b-primary lg:hidden">
          <img src={Logo} alt="" />
          <svg
            width="24"
            height="25"
            fill="none"
            className="cursor"
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              d="M3 12.5H17M3 6.5H21M3 18.5H21"
              stroke="#667085"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {isOpen && (
        <div
          className="w-screen h-screen bg-opacity-80 bg-[#000] z-40 absolute lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div class="absolute inset-y-0 right-0 bottom-0 w-[300px] overflow-y-scroll bg-[#ffffff]">
            <Sidebar />
          </div>
        </div>
      )}
      <div className="flex">
        <div className="max-lg:hidden">
          <Sidebar />
        </div>
        <Content />
      </div>
    </>
  );
};

export default Layout;
