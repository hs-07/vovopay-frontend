import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navlinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Help", path: "/help" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="hidden lg:flex w-full h-[6rem] px-20 py-4 items-center justify-between ">
        <div className="h-full">
          <img src="/images/logo.svg" alt="remesa" className="h-full py-2" />
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex justify-end space-x-6">
            {Navlinks.map((link, index) => (
              <NavLink
                exact
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  `cursor-pointer font-[400] text-[16px] ${
                    isActive ? "text-[#39AE3A]" : "text-[#0C3506]"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </ul>
          <div className="">
            <button className="text-[#9FE870] bg-[#0C3506] border-none text-[16px] h-[50px] w-44 rounded-xl">
              Open Account
            </button>
          </div>
        </div>
      </nav>
      <>
        <nav className="flex lg:hidden w-full h-[4rem] md:px-8 px-4 justify-between items-center py-3">
          <div className="h-full">
            <img src="/images/logo.svg" alt="remesa" className="h-full py-2" />
          </div>
          <div className="w-fit" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <div className="flex flex-col">
                <div className="w-8 h-1 bg-black rounded-lg rotate-45 translate-y-1 -translate-x-2"></div>
                <div className="w-8 h-1 bg-black rounded-lg -rotate-45 -translate-x-2"></div>
              </div>
            ) : (
              <div className="w-8 h-8 grid grid-cols-2 items-center cursor-pointer">
                <div className="w-3 h-3 bg-[#0C3506] rounded"></div>
                <div className="w-3 h-3 bg-[#0C3506] rounded"></div>
                <div className="w-3 h-3 bg-[#0C3506] rounded"></div>
                <div className="w-3 h-3 bg-[#0C3506] rounded"></div>
              </div>
            )}
          </div>
        </nav>
        {isOpen && (
          <div className="w-full h-[100vh] bg-white z-[99] absolute">
            <ul className="flex flex-col justify-start items-center h-full space-y-6 py-12 font-semibold">
              {Navlinks.map((link, index) => (
                <NavLink
                  exact
                  to={link.path}
                  key={index}
                  className={({ isActive }) =>
                    `cursor-pointer font-[400] text-[16px] ${
                      isActive ? "text-[#39AE3A]" : "text-[#0C3506]"
                    }`
                  }
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {link.title}
                </NavLink>
              ))}

              <button className="text-[#9FE870] bg-[#0C3506] border-none text-[16px] h-[50px] w-44 rounded-xl">
                Open Account
              </button>
            </ul>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
