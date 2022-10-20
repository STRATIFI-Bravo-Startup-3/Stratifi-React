import React, { Component } from "react";
import desktopBackground from "../images/background.jpeg";
import mobileBackground from "../images/background-sm.jpeg";
import { useEffect, useState } from "react";

const Hero = () => {
  const imageUrl =
    useWindowWidth() >= 650 ? desktopBackground : mobileBackground;

  return (
    <section className="w-auto h-[42rem] ">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="h-full w-full relative bg-cover bg-no-repeat"
      >
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0">
          <div className=" flex-col pt-28 px-8 lg:py-36 w-[500px] mx-auto text-left max-w-sm lg:max-w-none">
            <h1 className="text-2xl  text-white">COMING SOON...</h1>
            <h1 className="lg:text-6xl text-4xl mt-5 text-white">
              Get notified when we launch!
            </h1>
            <div className="flex form-input h-10 w-80 mt-5 rounded p-1">
              <input
                placeholder="Enter your email address"
                className="border-0 p-0 focus:ring-0 w-0 grow text-center"
                type="email"
              />
              <button className=" block px-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ring-2 ring-blue-500 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowWidth;
};

export default Hero;
