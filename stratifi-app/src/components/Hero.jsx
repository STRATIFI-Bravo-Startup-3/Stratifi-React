import React, { Component } from "react";
import desktopBackground from "../images/background.jpeg";
import mobileBackground from "../images/background-sm.jpeg";
import { useEffect, useState } from "react";
import MailchimpSubscribe from "./mailchimpSubscribe";
const Hero = () => {
  const imageUrl =
    useWindowWidth() >= 650 ? desktopBackground : mobileBackground;

  const url =
    "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";

  return (
    <section className="w-auto h-[42rem] ">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="h-full w-full relative bg-cover bg-no-repeat"
      >
        <div className="w-full h-full bg-black opacity-75 absolute top-0 left-0">
          <div className=" flex-col pt-28 px-8 lg:py-36 w-[500px] mx-auto text-left max-w-sm lg:max-w-none">
            <h1 className="text-2xl  text-white">COMING SOON...</h1>
            <h1 className="lg:text-6xl text-4xl mt-5 text-white">
              Get notified when we launch!
            </h1>

            <MailchimpSubscribe url={url} />
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
