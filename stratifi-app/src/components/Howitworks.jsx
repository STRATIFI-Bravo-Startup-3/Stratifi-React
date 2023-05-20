import React from "react";
import Image from "next/image";
import Link from "next/link";

const Howitworks = () => {
  const itemList = [
    {
      id: 0,
      title: "Sign Up",
      content: `Begin your journey by creating a free account. 
      It's a seamless and straightforward process that opens up a 
      world of opportunities for you. Sign up today and unlock your potential.`,
      image: "/images/how1.svg",
    },
    {
      id: 1,
      title: "Choose a Category",
      content: `Discover the power of aligning with your desired category. 
      Explore various options and select the one that best resonates with 
      your goals and aspirations. Our diverse range of categories ensures 
      that you find the perfect fit for your unique vision.`,
      image: "/images/how2.svg",
    },
    {
      id: 2,
      title: "Get Paired",
      content: `Our advanced matching algorithm ensures that you are 
      connected with an Influencer who not only meets your requirements 
      but also complements your brand or project. Enjoy the benefits 
      of a tailored partnership that brings your ideas to life.`,
      image: "/images/how3.svg",
    },
  ];

  return (
    <section className="items-center flex flex-col animate__animated  animate__fadeInLeft">
      <div className="flex flex-col items-center font-bold text-2xl lg:text-3xl py-8">
        <h1>How it Works</h1>
      </div>
      <div className="flex gap-8 overflow-scroll w-full px-4 lg:px-24">
        {itemList.map((item) => (
          <div
            className="flex flex-col items-center gap-4 w-full mb-8 py-4"
            key={item.id}
          >
            <div className="transition ease-in-out duration-500 delay-150 hover:scale-110 hover:translate-y-1 bg-secondary rounded-3xl bg-[#AD6EC0] w-[12rem] py-4 flex flex-col gap-2 text-sm text-slate-800 items-center shadow-sm shadow-slate-600">
              <Image
                src={item.image}
                alt=""
                width={500}
                height={500}
                className="w-[3rem] lg:w-[4rem]"
              />
              <h1 className=" text-center mt-4 text-black font-bold">
                {item.title}
              </h1>
              <span className="text-center px-4">{item.content}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col py-10">
        <Link href="/register">
          <button className="transition ease-in-out duration-500 delay-150 hover:scale-110 hover:translate-y-1 w-40 text-white active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
            Get Started for Free
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Howitworks;
