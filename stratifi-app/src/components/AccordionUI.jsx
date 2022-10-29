import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);
  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between items-center p-2 mt-2 rounded-md bg-white hover:bg-purple-300 hover:shadow-lg focus:bg-purple-300"
      >
        <div className="flex group cursor-pointer">
          <div className="text-black font-semibold pl-10 group-hover:white ">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <MdOutlineKeyboardArrowDown className="w-6 h-6 group-hover:text-white text-black" />
          ) : (
            <MdOutlineKeyboardArrowUp className="w-6 h-6 group-hover:text-white text-black" />
          )}
        </div>
      </div>
      {Index === Id && (
        <div className="bg-white px-10 font-semibold text-black w-3/4  h-auto rounded-md p-4 border-1-2 border-pink-400 py-2 mb-2 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;
