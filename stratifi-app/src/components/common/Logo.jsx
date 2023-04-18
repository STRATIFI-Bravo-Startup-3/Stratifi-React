import Image from "next/image";
import { logo } from "../../../public/images/logo.png";

const Logo = () => {
  return (
    <div className="items-center flex flex-col mb-5 ">
      <Image
        className="mx-auto w-[3rem]"
        src="/images/logo.png"
        alt=""
        srcSet=""
        width={500}
        height={500}
      />
      <span className="font-black text-slate-800 text-lg my-auto">
        STRATIFI.NG
      </span>
    </div>
  );
};

export default Logo;
