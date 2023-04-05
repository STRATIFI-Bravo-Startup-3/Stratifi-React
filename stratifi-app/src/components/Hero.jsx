import React from "react";
import useWindowWidth from "./common/windowWidth";

const Hero = () => {
  // const imageUrl =
  //   useWindowWidth() >= 650 ? desktopBackground : mobileBackground;

  const url =
    "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";

  return (
    <section
      // style={{ backgroundImage: `url(${imageUrl})` }}
      className="lg:flex grid grid-cols-1 w-auto h-full bg-cover bg-no-repeat relative "
    >
      <div className="mx-auto lg:px-[3rem]  items-start lg:ml-24 flex flex-col gap-16 lg:my-auto lg:pt-28 pt-8 w-9/12 lg:w-3/6  text-left text-white  ">
        <div className=" md:mx-auto lg:mx-0 font-black text-3xl lg:text-[2.5rem] ">
          MARKETING WITH INFLUENCE
        </div>
        <div className="md:mx-auto lg:mx-0 flex flex-col gap-1">
          <span className="lg:text-xl">Real brands, Trusted Creators,</span>
          <span className="lg:text-xl">Guaranteed Results.</span>
        </div>
        <div className="md:mx-auto lg:mx-0 flex justify-between gap-8 animate__animated animate__bounce  lg:gap-6">
          <a href="/register">
            {" "}
            <button className="text-sm lg:text-base ring-2 ring-white bg-white hover:bg-slate-100 active:bg-slate-200 rounded-md text-[#FF8F50] py-1 px-6 w-30 lg:w-40">
              GET STARTED
            </button>
          </a>
          <a href="/login">
            <button className="text-sm lg:text-base ring-2 ring-white bg-[#AD6EC0] hover:bg-[#A960BF] active:bg-[#A752C0] rounded-md text-white py-1 px-6 w-30 lg:w-40">
              Sign In
            </button>
          </a>
        </div>
      </div>
      <div className="h-auto items-center mx-auto lg:pt-12 lg:w-3/5 animate__animated animate__fadeInRight">
        <img className="w-full" src="" alt="" />
      </div>
    </section>
  );
};

// const useWindowWidth = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleWindowResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   return windowWidth;
// };

export default Hero;
