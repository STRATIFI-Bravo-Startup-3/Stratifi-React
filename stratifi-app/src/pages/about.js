import React from "react";
Layout;
import Image from "next/image";
import Layout from "./layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-about">
        <div className="py-24 sm:py-[10rem] border-t-2 border-slate-200 text-gray-200 px-4 sm:px-8">
          <div className="flex flex-col gap-4 items-center justify-center max-w-[65rem] shadow-lg p-4 sm:p-12 mx-auto bg-[#AD6EC0] rounded-lg animate__animated animate__headShake">
            <div className="flex flex-col md:flex-row gap-4">
              <div className=" rounded-full ">
                <Image
                  className=""
                  src="/images/about7.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="flex flex-col p-2 gap-2">
                <h1 className="font-bold text-white text-2xl">About Us</h1>
                <span>
                  At Stratifi, we believe in the transformative power of
                  influencer marketing. We are passionate about connecting
                  brands with influencers to create impactful collaborations
                  that drive real results. Our mission is to provide a seamless
                  platform that empowers brands to harness the potential of
                  social media influence and build authentic connections with
                  their target audience.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <span>
                With the rise of social media, influencers have become a driving
                force in shaping consumer behavior and preferences. We
                recognized the need for a platform that simplifies and enhances
                the process of brand-influencer collaborations. Stratifi was
                born out of the desire to bridge the gap between brands and
                influencers, enabling them to form mutually beneficial
                partnerships that yield remarkable outcomes.
              </span>
              <span>
                Our platform is built on the principles of innovation,
                transparency, and efficiency. We strive to continually innovate
                and adapt to the evolving needs of the influencer marketing
                landscape, ensuring our users have access to the latest tools
                and features that optimize their campaigns. Transparency is at
                the core of our operations. We believe in fostering trust
                between brands and influencers, facilitating fair
                collaborations, and providing clear and transparent
                communication. From pricing to campaign management, we ensure
                that all transactions are secure and transparent, promoting a
                positive and trustworthy ecosystem.
              </span>
              <span>
                Stratifi is more than just a platform; it's a community of
                like-minded individuals driven by a shared passion for
                creativity, authenticity, and growth. We are dedicated to
                supporting our users every step of the way, offering
                personalized guidance, valuable insights, and exceptional
                customer service. Join the Stratifi community and unlock the
                potential of influencer marketing.
              </span>
              <span>
                Discover the perfect influencers for your brand, create
                memorable campaigns, and achieve your marketing goals like never
                before. Together, let's shape the future of influencer marketing
                and revolutionize the way brands connect with their audiences.
                We invite you to explore Stratifi, connect with our team, and
                embark on an exciting journey of collaboration, inspiration, and
                success. Let's make a difference and create influential moments
                together.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
