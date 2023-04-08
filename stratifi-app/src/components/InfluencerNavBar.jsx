import React, { Component, useState } from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const influencerNavBar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      id: 0,
      item: "Home",
      link: `/`,
    },
    {
      id: 1,
      item: "Brands",
      link: `/`,
    },
    {
      id: 2,
      item: "Collabs",
      link: `/collabs`,
    },
    {
      id: 3,
      item: "My account",
      link: `my account`,
    },
  ];

  return (
    <header className="">
      <div className="flex items-center lg:px-[5rem] p-1  text-orange-600 justify-between xl:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <a to="/">
          {" "}
          <div className="ml-16 lg:ml-10 flex justify-center w-[3rem]">
            <Image
              className=""
              src="/images/logo4.png"
              alt=""
              srcSet=""
              width={800}
              height={800}
            />
          </div>
        </a>
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
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="p-3 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
              >
                <a
                  className="hover:text-slate-800 active:text-black"
                  href={nav.link}
                >
                  {nav.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a to="/">
          {" "}
          <div className="ml-16 lg:ml-10 flex justify-center w-[3rem]">
            <Image
              className=""
              src="/images/message.png"
              alt=""
              srcSet=""
              width={800}
              height={800}
            />
          </div>
        </a>
      </div>
    </header>
  );
};

export default influencerNavBar;
