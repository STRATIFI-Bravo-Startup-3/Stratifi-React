import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <div className="items-center flex flex-col mb-5 ">
      <img className="mx-auto w-[3rem]" src={logo} alt="" srcSet="" />
      <span className="font-black text-slate-700 text-lg my-auto">
        STRATIFI.NG
      </span>
    </div>
  );
};

export default Logo;
