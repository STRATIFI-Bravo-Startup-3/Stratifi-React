import React, { Component, useState } from "react";
import logo from "../images/logo.png";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-4 border-neutral-800">
      <div className="flex items-center p-2 bg-[#702862] text-white justify-between mx-auto xl:mx-w-7xl max-w-full text-start  w-full">
        <div className="w-40">
          <img className="" src={logo} alt="" srcSet="" />
        </div>
        <HiMenu className="lg:hidden block" onClick={() => setOpen(!open)} />
        <nav
          className={`${
            open ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex lg:justify-between lg:gap-10 ">
            <li className="px-3 block cursor-pointer">About Us</li>
            <li className="px-3 block cursor-pointer">Home</li>
            <li className="px-3 block cursor-pointer">Pricing</li>
            <li className="px-3 block cursor-pointer">Services</li>
            <li className="px-3 block cursor-pointer">Contact us</li>
            <button className="px-4 bg-blue-500 ring-2 ring-blue-500 rounded">
              Log in
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
