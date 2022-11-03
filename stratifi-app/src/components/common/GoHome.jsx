import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const GoHome = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-2 border-b-2 border-white">
      <Link to="/">
        <HiHome />
        <span>Home</span>
      </Link>
    </div>
  );
};

export default GoHome;
