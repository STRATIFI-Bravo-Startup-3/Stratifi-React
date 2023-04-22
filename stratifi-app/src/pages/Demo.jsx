import React, { Component, useState } from "react";
import Image from "next/image";
import { HiChevronUp } from "react-icons/hi";
import image from "../../public/images/prelaunchimages.jpg";
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
      <section className="px-20  grid grid-cols-1 items-center lg:gap lg:flex lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInLeft">
        <div className=" w-[15rem] lg:ml-48 mx-auto bg-[#FF8F50] rounded-full ">
          <Image
            className=""
            src="/images/Ellipse 25.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="mx-auto lg:w-full flex flex-col gap-6  pl-8">
          <h1 className="text-purple-600 md:text-4xl text-3xl font-bold">
            {" "}
            Hi, <br />
            Anna
          </h1>
          <div className="flex">
            {" "}
            <div className="text-orange-400 md:text-4xl font-bold text-3xl">
              Show Profile Details
            </div>
          </div>
          <div className="">
            <HiChevronUp
              className={`${
                open ? "rotate-180 ease-in delay-150" : ""
              } ring-2 ring-slate-600 active:ring-slate-800 ring-offset-0 lg:h-6 w-6 cursor-pointer rounded mr-3 bg-orange-400`}
              onClick={() => setOpen(!open)}
            />
            <nav
              className={`${
                open ? "block w-full ease-in delay-150" : "hidden"
              }  `}
            >
              <ul className=" w-full lg:border-black border lg:flex lg: container mx-auto lg:w-full  ">
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
                        className="w-[3rem] lg:w-[10rem]"
                      />
                    </div>
                    <div className="text-2xl underline">{nav.title}</div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Second section  */}
      <section className="container mx-auto ">
        <h1 className="md:text-4xl text-2xl font-bold text-center mb-4">
          Invitations
        </h1>
        <div className=" mx-auto container bg-purple-500 md:rounded-lg  rounded-sm">
          <h2 className="text-center font-bold md:text-3xl text-2xl underline mb-4">
            House of Thera Pre-launch campaign
          </h2>
          <div className="flex  ">
            {/* Button section */}
            <div className="flex-col px-8 pl-8 lg:px-40 lg:py-5 lg:mt-16 ">
              <button className="bg-white p-2 rounded-lg  lg:px-14 lg:py-5 mb-8 font-medium">
                Lifestyle
              </button>
              <div className="bg-white mb-4 p-2 rounded-lg  lg:px-14 lg:py-5 font-medium">
                Fashion
              </div>
            </div>
            {/* Image section */}
            <div className=" w-2/5 mx-auto container sm:py-2 lg:px-4 lg:ml-4 lg:mb-4">
              <Image className="" src={image} alt="" width={500} height={500} />
            </div>
          </div>
        </div>
        {/* Button2 section */}
        <div className="flex justify-between mt-4 px-4 item-center">
          <button className="bg-orange-400 rounded-lg  p-2 text-xl lg:text-2xl font-medium ">
            Message
          </button>

          <button className="bg-orange-400 rounded-lg  p-2 text-xl font-medium lg:px-4 lg:text-2xl">
            View
          </button>
        </div>
      </section>

      {/* Third section */}

      <section className="container mx-auto ">
        <h1 className="md:text-4xl text-2xl font-bold text-center mb-4">
          Collabs you may like
        </h1>
        <div className=" mx-auto container bg-purple-500 md:rounded-lg  rounded-sm">
          <h2 className="text-center font-bold md:text-3xl text-2xl underline mb-4">
            Fitness World
          </h2>
          <div className="flex  ">
            {/* Button section */}
            <div className="flex-col  pl-8 lg:px-40 lg:py-5 lg:mt-16 items-start">
              <button className="bg-white p-2 px-10 lg:px-16  rounded-lg lg:py-4 mb-8 font-medium">
                Sports
              </button>
              <div className="bg-white mb-4 p-2  rounded-lg px-8  lg:px-10 lg:py-4 font-medium ">
                Lifestyle
              </div>
              <div className="bg-white mb-4 mt-6 p-2 rounded-lg  lg:px-10 lg:py-4 font-medium">
                Health/fitness
              </div>
            </div>
            {/* Image section */}
            <div className=" w-2/5 mt-8 mx-auto container sm:py-8 lg:px-4 lg:ml-4 lg:mb-4">
              <Image className="" src={image} alt="" width={500} height={500} />
            </div>
          </div>
        </div>
        {/* Button2 section */}
        <div className="flex justify-between mt-4 px-4 item-center">
          <button className="bg-orange-400 rounded-lg  p-2 text-xl lg:text-2xl font-medium ">
            Message
          </button>

          <button className="bg-orange-400 rounded-lg  p-2 text-xl font-medium lg:px-4 lg:text-2xl">
            View
          </button>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
