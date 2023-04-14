import { CiSearch } from "react-icons/ci";

const SearchSm = () => {
  return (
    <div className="flex items-center rounded ring-1 ring-gray-300 bg-white">
      <div className="pl-4 h-8 flex justify-center items-center">
        <CiSearch />
      </div>
      <div className="px-2 h-8 flex justify-center items-center w-[12rem]">
        <input
          className="px-2 h-full w-full outline-none"
          type="text"
          placeholder="Search Campaigns"
        />
      </div>
    </div>
  );
};

export default SearchSm;
