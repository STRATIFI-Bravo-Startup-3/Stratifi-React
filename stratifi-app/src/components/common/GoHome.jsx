import { HiHome } from "react-icons/hi";
import Link from "next/link";

const GoHome = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-2 border-b-2 border-white">
      <Link href="/">
        <HiHome />
        <span>Home</span>
      </Link>
    </div>
  );
};

export default GoHome;
