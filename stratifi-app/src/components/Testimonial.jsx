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

const Testimonial = () => {
  return (
    <section>
      {/* <!-- Container to heading and testm blocks --> */}
      <div className="max-w-6xl px-5 mx-auto mt-10 text-center">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Testimonials from our clients
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div className="flex flex-col mt-10 md:flex-row md:space-x-6">
          {/* <!-- Testimonials --> */}
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-20  p-4 rounded-lg bg-veryLightGray mb-4 md:mb-32 shadow-sm md:w-1/3 md:shadow-md ring-1 ring-slate-200"
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
    </section>
  );
};

export default Testimonial;
