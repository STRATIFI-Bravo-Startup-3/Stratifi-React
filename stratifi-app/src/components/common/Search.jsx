import { CiSearch } from "react-icons/ci";

const Search = ({ label }) => {
  return (
    <div className="flex items-center rounded ring-1 ring-gray-300 bg-white">
      <div className="pl-4 h-12 flex justify-center items-center">
        <CiSearch />
      </div>
      <div className="px-2 h-12 flex justify-center items-center w-[15rem]">
        <input
          className="px-2 h-full w-full outline-none"
          type="text"
          placeholder={label}
        />
      </div>
    </div>
  );
};

export default Search;
