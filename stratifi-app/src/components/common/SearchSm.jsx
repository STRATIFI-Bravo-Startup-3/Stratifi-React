import { CiSearch } from "react-icons/ci";

const SearchSm = ({ label }) => {
  return (
    <div className="flex items-center rounded ring-1 ring-gray-300 bg-slate-100">
      <div className="pl-4 h-8 flex justify-center items-center">
        <CiSearch />
      </div>
      <div className="px-2 h-8 flex justify-center items-center w-[12rem]">
        <input
          className="px-2 h-full w-full outline-none bg-slate-100"
          type="text"
          placeholder={label}
        />
      </div>
    </div>
  );
};

export default SearchSm;
