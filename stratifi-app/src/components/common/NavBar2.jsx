import React, { Component, useState } from "react";
import logo2 from "../../images/logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  const [open, setOpen] = useState(false);
  const navItems = ["About Us", "Home", "Pricing", "Services", "Contact us"];
  const nav = [];

  return (
    <header className=" bg-[#FFFFFF]">
      <div className="flex items-center p-1  text-slate-600 justify- xl:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <div className="ml-16 lg:ml-10 flex justify-center w-[3rem]">
          <img className="" src={logo2} alt="" srcSet="" />
          <span className="font-black text-lg my-auto">STRATIFI.NG</span>
        </div>
        <HiMenu
          className={`${
            open ? "rotate-90 ease-in delay-150" : ""
          } ring-2 ring-slate-600 active:ring-slate-800 ring-offset-0 lg:hidden block h-6 w-6 cursor-pointer rounded mr-3`}
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block w-full ease-in delay-150" : "hidden"
          } lg:flex lg:items-center lg:w-auto `}
        >
          <ul className="lg:flex lg:justify-between items-center text-md lg:text-base">
            {navItems.map((navItem) => (
              <li
                key={navItem}
                className="px-3 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
              >
                <Link className="hover:text-slate-800 active:text-black" to="/">
                  {navItem}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar2;
