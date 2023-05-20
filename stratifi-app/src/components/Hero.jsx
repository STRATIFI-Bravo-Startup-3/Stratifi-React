import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const url =
    "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";

  return (
    <section className="lg:flex grid grid-cols-1 w-auto h-full bg-cover bg-no-repeat relative bg-primary pt-[6rem]">
      <div className="mx-auto lg:px-[3rem]  items-start lg:ml-24 flex flex-col gap-4 md:gap-8 lg:my-auto lg:pt-28 pt-8 w-9/12 lg:w-3/6  text-left text-white  ">
        <div className=" md:mx-auto lg:mx-0 font-black text-3xl lg:text-[2.5rem] ">
          MARKETING WITH INFLUENCE
        </div>
        <div className="md:mx-auto lg:mx-0 flex flex-col gap-1">
          <span className="lg:text-xl">
            Harness the influence of social media stars, content creators, and
            industry experts to amplify your brand's message and reach your
            target audience like never before.
          </span>
        </div>
        <div className="md:mx-auto lg:mx-0 flex justify-between gap-8 animate__animated animate__bounce  lg:gap-6">
          <Link href="/register">
            <button className="text-sm lg:text-base ring-2 ring-white bg-white transition duration-500 ease-in-out delay-150 hover:scale-110 hover:translate-y-1 hover:bg-slate-100 active:bg-slate-200 rounded-md text-[#FF8F50] py-1 px-6 w-30 lg:w-40">
              GET STARTED
            </button>
          </Link>
          <Link href="/login">
            <button className="text-sm lg:text-base ring-2 ring-white bg-[#AD6EC0] transition duration-500 ease-in-out delay-150 hover:scale-110 hover:translate-y-1 hover:bg-[#A960BF] active:bg-[#A752C0] rounded-md text-white py-1 px-6 w-30 lg:w-40">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="h-auto items-center mx-auto lg:pt-12 lg:w-3/5 animate__animated animate__fadeInRight">
        <Image
          className="w-full"
          src="/images/influencer.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
