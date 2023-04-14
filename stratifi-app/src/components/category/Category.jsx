"use client";
import { useState } from "react";
import { CategoryView } from "./Categoryview";
import { blogData } from "@/data"; // Get all category items

const resetCategory = {
  all: false,
  brand: false,
  tips: false,
  recommendation: false,
  influencers: false,
  resources: false,
};

function Category() {

  const [activeCategory, setActiveCategory] = useState({
    all: true,
    brand: false,
    tips: false,
    recommendation: false,
    influencers: false,
    resources: false,
  });

  // Set the data items to paginate when a category type is clicked
  const [currentDataItems, setCurrentDataItems] = useState(blogData);

  // Set the starting page number && Reset to page 1 upon change of category type
  const [currentPage, setCurrentPage] = useState(1);

  // Handle category change button click
  function handleCategoryChange(category) {
    const data = blogData.filter((categoryData) => {
      return categoryData.category == category;
    });
    setCurrentDataItems(data);
  }

  return (
    <>
      <div className="w-full overflow-x-auto my-4">
        <div className="grid gap-3 grid-rows-[repeat(1,_minmax(0,_37px))] auto-cols-[max-content] grid-flow-col [&>*]: text-white">
          <div
            className={`flex items-center px-3 cursor-pointer rounded-sm ${
              activeCategory.all
                ? "bg-[white] border-[1px] border-green-700 text-[black]"
                : "bg-[#FE9C67]"
            }`}
            onClick={() => {
              setActiveCategory({
                ...activeCategory,
                ...resetCategory,
                all: true,
              });
              setCurrentDataItems(blogData);
              setCurrentPage(1);
            }}>
            {" "}
            All
          </div>
          <div
            className={`flex items-center px-3 cursor-pointer rounded-sm ${
              activeCategory.tips
                ? "bg-[white] border-[1px] border-green-700 text-[black]"
                : "bg-[#FE9C67]"
            }`}
            onClick={() => {
              setActiveCategory({
                ...activeCategory,
                ...resetCategory,
                tips: true,
              });
              handleCategoryChange("tips");
              setCurrentPage(1);
            }}>
            Tips
          </div>
          <div
            className={`flex items-center px-3 cursor-pointer rounded-sm ${
              activeCategory.recommendation
                ? "bg-[white] border-[1px] border-green-700 text-[black]"
                : "bg-[#FE9C67]"
            }`}
            onClick={() => {
              setActiveCategory({
                ...activeCategory,
                ...resetCategory,
                recommendation: true,
              });
              handleCategoryChange("recommendation");
              setCurrentPage(1);
            }}>
            Recommendation
          </div>
          <div
            className={`flex items-center px-3 cursor-pointer rounded-sm ${
              activeCategory.brand
                ? "bg-[white] border-[1px] border-green-700 text-[black]"
                : "bg-[#FE9C67]"
            }`}
            onClick={() => {
              setActiveCategory({
                ...activeCategory,
                ...resetCategory,
                brand: true,
              });
              handleCategoryChange("brand");
              setCurrentPage(1);
            }}>
            Brands
          </div>
          <div
            className={`flex items-center px-3 cursor-pointer rounded-sm ${
              activeCategory.influencers
                ? "bg-[white] border-[1px] border-green-700 text-[black]"
                : "bg-[#FE9C67]"
            }`}
            onClick={() => {
              setActiveCategory({
                ...activeCategory,
                ...resetCategory,
                influencers: true,
              });
              handleCategoryChange("influencers");
              setCurrentPage(1);
            }}>
            Influencers
          </div>
          <div
            className={`flex items-center px-3 cursor-pointer rounded-sm ${
              activeCategory.resources
                ? "bg-[white] border-[1px] border-green-700 text-[black]"
                : "bg-[#FE9C67]"
            }`}
            onClick={() => {
              setActiveCategory({
                ...activeCategory,
                ...resetCategory,
                resources: true,
              });
              handleCategoryChange("resources");
              setCurrentPage(1);
            }}>
            Resources
          </div>
        </div>
      </div>
      <div className="mt-6">
        <CategoryView
          data={currentDataItems}
          recordsPerPage={3}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export { Category };

























