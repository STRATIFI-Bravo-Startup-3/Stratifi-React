"use client";

import { useState } from "react";
import { paginateData } from "../../utils";
import { Pagination } from "../common/paginate";

function CategoryView({ data, recordsPerPage, currentPage, setCurrentPage }) {
  const { records, totalPageLinks, firstIndex } = paginateData(
    data,
    currentPage,
    recordsPerPage
  );

  function onPrevPage() {
    if (currentPage !== firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function onNextPage() {
    if (currentPage !== totalPageLinks) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCurrentPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className="flex flex-col gap-y-8 sm:gap-0 max-w-[900px] mx-auto">
        {records.map((category, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:py-[2.5rem] sm:border-b-[1px] sm:border-y-gray-400 rounded shadow sm:rounded-none sm:shadow-none mx-auto"
            >
              {/* category image container */}
              <div className="w-full h-[150px] sm:h-full">
                <img
                  className="w-full h-full"
                  src={category.image.src}
                  alt={category.title}
                />
              </div>

              <div className="flex flex-col justify-between py-4 px-3 sm:py-0">
                <div>
                  {/* Category type */}
                  <div className="w-max rounded-sm text-white capitalize py-1 px-3 bg-blogPry">
                    {category.category}
                  </div>

                  {/* Category date published and minutes read */}
                  <div className="flex justify-between gap-x-4 text-gray-600 mt-3">
                    <div className="text-xs font-mono">{category.date}</div>
                    <div className="text-xs font-mono">{`${category.minutesRead} minutes read`}</div>
                  </div>

                  {/* Category title */}
                  <div className="font-bold mt-1 md:text-xl">
                    {category.title}
                  </div>

                  {/* Category description */}
                  <div className="text-sm mt-2 md:text-[1rem]">
                    {category.description}
                  </div>
                </div>
                <div
                  className="flex justify-between items-centersetActiveCategory({
                ...activeCategory,
                ...resetCategory,
                all: true,
              }); mt-3"
                >
                  <div className="text-xs">{`${category.commentAmount} comments `}</div>
                  <a href="#" className="text-blue-600 text-xs capitalize ">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-7">
        <Pagination
          totalPageLinks={totalPageLinks}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          changeCurrentPage={changeCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export { CategoryView };
