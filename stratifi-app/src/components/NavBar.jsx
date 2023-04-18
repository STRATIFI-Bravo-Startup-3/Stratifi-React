import React, { Component, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      id: 0,
      item: "About Us",
      link: `/about`,
    },
    {
      id: 1,
      item: "Home",
      link: `/`,
    },
    {
      id: 2,
      item: "Pricing",
      link: `/pricing`,
    },
    {
      id: 3,
      item: "Blog",
      link: `/blog/home`,
    },
    {
      id: 4,
      item: "Contact",
      link: `/contact`,
    },
  ];

  return (
    <header className="">
      <div className="flex items-center lg:px-[5rem] p-1  text-gray-600 justify-between xl:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <Link href="/">
          {" "}
          <div className="ml-16 lg:ml-10 flex justify-center w-[3rem]">
            <Image
              className=""
              src="/images/logo.png"
              alt=""
              srcSet=""
              width={500}
              height={500}
            />
            <span className="font-black text-lg my-auto">STRATIFI.NG</span>
          </div>
        </Link>
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
                <Link
                  className="hover:text-slate-800 active:text-black"
                  href={nav.link}
                >
                  {nav.item}
                </Link>
              </li>
            ))}
            <Link href="/login">
              {" "}
              <button className="ml-3 my-3 block text-white px-4 active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
                Sign in
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
