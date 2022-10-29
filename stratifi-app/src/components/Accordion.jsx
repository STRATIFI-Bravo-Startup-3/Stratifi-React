import React, { useState } from "react";
import AccordionUI from "./AccordionUI";

function Accordion() {
  const [Index, setIndex] = useState(false);
  //data array
  const data = [
    {
      id: 1,
      question: "What is Stratify",
      answer: `Stratifi is an online marketplace for businesses and start-up’s
      to connect with influencers in various niche. It is a website
      made for the sole purpose of connecting brands to online
      influencers.
      We serve as the middle-man between brands and influencers.
      We ensure that brands are matched to the best of
      influencers in their niche while also ensuring that influencers
      get paid for the content they promote. All our influencer
      are vetted to ensure maximum delivery and professionalism.`,
    },

    {
      id: 2,
      question: "What service does Stratifi offer",
      answer: `An online platform for influencer to connect with brands directly. As an influencer we solve the problem of brands not paying for the
      content you promote in the guise of not having enough visibility,
      sales, or ROI. Connection between brands and social media
      influencers.`,
    },

    {
      id: 3,
      question: "Is Stratifi free",
      answer: `Signing up as a brand or influencer is completely free, but we do
      charge a commission for every transaction done on stratify.`,
    },

    {
      id: 4,
      question: "Is Stratifi trustworthy",
      answer: `At stratify your safety is important to us. Brands and influencers
      must pass our quality assurance checks and must be vetted to ensure the safety of each user.`,
    },

    {
      id: 5,
      question: "Why should I use Straifi",
      answer: ` We do the hard work so that you can enjoy a seamless interaction to meet you brand goals.`,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-[#AD6EC0] ">
      {/* map data*/}
      {data.map((data) => {
        return (
          /*accodionui will wrap here*/
          <AccordionUI
            title={data.question}
            id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
}

export default Accordion;
