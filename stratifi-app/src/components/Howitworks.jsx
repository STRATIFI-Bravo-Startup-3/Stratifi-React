import React from "react";
import Image from "next/image";

const Howitworks = () => {
  const itemList = [
    {
      id: 0,
      title: "Sign Up",
      content: "Create an account for free, it’s simple and easy",
      image: "/images/how1.svg",
    },
    {
      id: 1,
      title: "Choose a Category",
      content: "Choose what aligns with your target and goals",
      image: "/images/how2.svg",
    },
    {
      id: 2,
      title: "Get Paired",
      content: "Get paired instantly with a verified Influencer",
      image: "/images/how3.svg",
    },
  ];

  return (
    <section className=" items-center flex flex-col animate__animated  animate__fadeInLeft">
      <div className="flex flex-col items-center font-bold text-2xl lg:text-3xl py-12">
        <h1>How it Works</h1>
      </div>

      <div className="grid grid-cols-1 lg:flex gap-12 lg:gap-[15rem] text-white">
        {itemList.map((item) => (
          <div
            className="flex flex-col items-center gap-4 w-full mb-8"
            key={item.id}
          >
            <div className="bg-secondary rounded-3xl bg-[#AD6EC0] w-[12rem] py-4 flex flex-col gap-2 text-sm text-slate-800 items-center shadow-sm shadow-slate-600">
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
        <a href="/register">
          <button className="w-40 text-white active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
            Get Started for Free
          </button>
        </a>
      </div>
    </section>
  );
};

export default Howitworks;
