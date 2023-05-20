// jshint esversion:6
import { useRef } from "react";

function Pagination({
  totalPageLinks,
  onPrevPage,
  onNextPage,
  changeCurrentPage,
  currentPage,
}) {
  // Ref to enable scrolling of page links into view
  const scrollRef = useRef();

  const pageNumbers = Array.apply(null, Array(totalPageLinks + 1))
    .map(function (_, i) {
      return i;
    })
    .slice(1);

  function handlePrevClick() {
    onPrevPage();
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 30;
  }

  function handleNextClick() {
    onNextPage();
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 30;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex shadow-sm w-max mx-auto items-stretch">
        {/* Previous button */}
        <div>
          <button
            className="p-[0.4rem] px-3 text-gray-100 bg-[#FF6610] rounded-l"
            onClick={handlePrevClick}
          >
            &lsaquo;
          </button>
        </div>

        {/* Page links container */}
        <div className="overflow-x-auto" ref={scrollRef}>
          <div className="grid grid-rows-[repeat(1,_minmax(0,_36px))] grid-flow-col w-max">
            {/* Display total page number buttons */}
            {pageNumbers.map((pageNumber) => {
              return (
                <div
                  key={pageNumber}
                  className={`cursor-pointer flex items-center p-[0.4rem] px-3 mx-[0.1rem] text-xs hover:bg-[#AD6EC0] hover:text-gray-200 bg:text-white ${
                    currentPage === pageNumber && "bg-[#AD6EC0] text-gray-100"
                  }`}
                  onClick={() => changeCurrentPage(pageNumber)}
                >
                  <span>{pageNumber}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next button */}
        <div>
          <button
            className="p-[0.4rem] px-3 text-[#534f4f] bg-[#FF6610] rounded-r"
            onClick={handleNextClick}
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
}

export { Pagination };
