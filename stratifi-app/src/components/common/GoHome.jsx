import { HiHome } from "react-icons/hi";

const GoHome = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-2 border-b-2 border-white">
      <a href="/">
        <HiHome />
        <span>Home</span>
      </a>
    </div>
  );
};

export default GoHome;
