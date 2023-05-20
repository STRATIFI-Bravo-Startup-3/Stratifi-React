import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: "0",
    comment: `Great service. I had an amazing experience using Stratifi to get
    an influencer for my brand marketing campaign.`,
    image: "/images/img5.png",
    name: "Jamila Datti",
  },
  {
    id: "1",
    comment: `An absolute influencer marketing tool. Effective and trustworthy.`,
    image: "/images/img6.png",
    name: "Ovie Boco",
  },
  {
    id: "2",
    comment: `Simple and effective. no long hours searching for reliable
    influencers.`,
    image: "/images/img7.png",
    name: "Dayo Inaolaji",
  },
];

const testimony = [
  {
    id: 1,
    name: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  // Add more testimonials here
];

const Testimonial = () => {
  return (
    <div className="overflow-x-auto">
      <div className="mx-auto mt-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Testimonials from our clients
        </h2>
        <div className="flex lg:justify-around mt-10 gap-8 overflow-scroll w-full">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col mx-4 flex-grow-0 flex-shrink-0 w-[15rem] space-y-20 bg-gray-100 p-4 rounded-lg mb-4 md:mb-32 shadow-sm md:w-[20rem] md:shadow-md ring-1 ring-slate-200"
            >
              <p className="text-sm pt-8 text-slate-600">{item.comment}</p>
              <div className="flex items-center text-gray-600">
                <Image
                  src={item.image}
                  className="w-9  rounded-full mr-4"
                  width={500}
                  height={500}
                  alt=""
                />
                <h5 className="text-md font-normal">{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
