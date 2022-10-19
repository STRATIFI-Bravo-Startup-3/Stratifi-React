import React, { Component, useState } from "react";
import logo from "../images/logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-4 bg-[#702862] border-neutral-800">
      <div className="flex items-center p-2  text-white justify-between xl:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <div className="w-40">
          <img className="" src={logo} alt="" srcSet="" />
        </div>
        <HiMenu
          className={`${
            open ? "rotate-90 ease-in delay-150" : ""
          } ring-2 ring-neutral-800 ring-offset-0 lg:hidden block h-6 w-6 cursor-pointer rounded`}
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block w-full ease-in delay-150" : "hidden"
          } lg:flex lg:items-center lg:w-auto `}
        >
          <ul className="lg:flex lg:justify-between items-center">
            <li className="px-3 block text-start">
              <Link className="hover:text-slate-300" to="/">
                About Us
              </Link>
            </li>
            <li className="px-3 block text-start">
              <Link className="hover:text-slate-300" to="/">
                Home
              </Link>
            </li>
            <li className="px-3 block text-start">
              <Link className="hover:text-slate-300" to="/">
                Pricing
              </Link>
            </li>
            <li className="px-3 block text-start">
              <Link className="hover:text-slate-300" to="/">
                Services
              </Link>
            </li>
            <li className="px-3 block text-start">
              <Link className="hover:text-slate-300" to="/">
                Contact Us
              </Link>
            </li>
            <button className="ml-3 my-1 block px-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ring-2 ring-blue-500 rounded">
              Log in
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
