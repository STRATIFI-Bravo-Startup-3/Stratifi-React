import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="flex gap-2 p-2 text-white">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage
                  ? "active ring-1 rounded bg-[#CC5500] py-2 px-3"
                  : "py-2 px-3 bg-[#ECB188] rounded text-[#CC5500]"
              }
            >
              <a onClick={() => onPageChange(page)}>{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.number.isRequired,
};

export default Pagination;
