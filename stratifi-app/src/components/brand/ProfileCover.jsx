import Image from "next/image";

const ProfileCover = () => {
  return (
    <div className="bg-secondary w-full py-4 rounded-lg relative ">
      <div className="px-4 flex h-full items-center">
        <Image
          src="/images/about1.svg"
          alt=""
          width={100}
          height={100}
          className="rounded-full ring-2 ring-[#FF6610] bg-white"
        />
        <div className="px-4 text-white text-lg font-bold rounded-lg">
          House of Thera
        </div>
      </div>
    </div>
  );
};
export default ProfileCover;
