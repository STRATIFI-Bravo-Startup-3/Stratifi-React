import React, { Component, useState } from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      id: 0,
      title: "View Profile",
      image: "/images/profile.svg",
    },

    {
      id: 1,
      title: "invitations",
      image: "/images/invitations.svg",
    },
    {
      id: 2,
      title: "Recent collabs",
      image: "/images/recent-colabs.svg",
    },
    {
      id: 3,
      title: "Messages",
      image: "/images/messages.svg",
    },

    {
      id: 4,
      title: "Billing",
      image: "/images/billing.svg",
    },

    {
      id: 5,
      title: "Security",
      image: "/images/security.svg",
    },
  ];

  return (
    <header className="">
      <div className="flex items-center lg:px-[5rem] p-1  text-gray-600 justify-between xl:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <a to="/"></a>
        <HiChevronUp
          className={`${
            open ? "rotate-180 ease-in delay-150" : ""
          } ring-2 ring-slate-600 active:ring-slate-800 ring-offset-0 lg:h-6 w-6 cursor-pointer rounded mr-3 bg-orange-400`}
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${open ? "block w-full ease-in delay-150" : "hidden"}  `}
        >
          <ul className=" lg:border-black border lg:flex lg:space-x-10 container mx-auto space-y-3.5 ">
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="p-3 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
              >
                <div className="bg-orange-400 lg:rounded-lg lg:pt-0.5 lg:pb-3 lg:pl-12 lg:pr-10">
                  <Image
                    src={nav.image}
                    alt=""
                    width={500}
                    height={500}
                    className="w-[3rem] lg:w-[4rem]"
                  />
                </div>
                <div className="text-2xl underline">{nav.title}</div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
