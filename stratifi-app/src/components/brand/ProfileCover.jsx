import Image from "next/image";

const ProfileCover = () => {
  return (
    <div className="px-2">
      <div className="bg-secondary w-full h-[7rem] md:h-[10rem] rounded-lg relative">
        <div className="px-4 flex h-full items-center">
          <Image
            src="/images/about1.svg"
            alt=""
            width={100}
            height={100}
            className="rounded-full ring-2 ring-gray-200 bg-white"
          />
          <div className="px-4 text-white text-lg font-bold rounded-lg">
            House of Thera
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCover;
