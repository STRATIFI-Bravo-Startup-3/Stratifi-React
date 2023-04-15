import Image from "next/image";
import { HiCheckBadge } from "react-icons/hi2";

const ProfileCover = () => {
  return (
    <div className="bg-secondary w-full py-4 rounded-lg relative text-sm">
      <div className="px-4 flex h-full items-center justify-end">
        <div className="flex flex-col items-center text-white">
          <div className="flex items-center gap-2 px-4 rounded-lg ">
            <h1 className=" text-lg font-bold text-center">House of Thera </h1>
            <HiCheckBadge className="text-base text-yellow-500 shadow-sm" />
          </div>
        </div>
        <Image
          src="/images/about1.svg"
          alt=""
          width={100}
          height={100}
          className="rounded-full ring-2 ring-[#FF6610] bg-white"
        />
      </div>
    </div>
  );
};
export default ProfileCover;
