import { useState } from "react";
import { useRouter } from "next/router";
import { Joi } from "joi-browser";
import SelectCurrency from "../common/SelectCurrency";
import SelectInfluencerType from "../common/SelectInfluencerType";
import SelectAudienceAge from "../common/SelectAudienceAge";
import SelectCategory from "../common/SelectCategory";
import SelectPlatform from "../common/SelectPlatform";
import SelectAudience from "../common/SelectAudience";
import SelectEarning from "../common/SelectEarning";
import ProfileCover from "./ProfileCover";

const Profile = () => {
  const [brand, setBrand] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  const toggleEdit = (e) => {
    e.preventDefault();
    setIsDisabled(false);
  };

  return (
    <>
      <div className="p-2 lg:px-6 w-full">
        <ProfileCover />
      </div>

      <div className="m-4 flex flex-col items-center w-full overflow-x-scroll">
        <form
          disabled
          // onSubmit={handleSubmit}
          className="flex flex-col bg-gray-100 px-4 md:px-8 m-[1rem] items-center rounded-xl  gap-4 animate__animated animate__fadeInDown  shadow-slate-800"
        >
          <div className="mt-6 flex items-center gap-2 w-full py-8 justify-between">
            <h1 className="text-center text-sm md:text-base font-bold text-slate-800">
              Profile Information
            </h1>

            <button
              onClick={toggleEdit}
              className=" bg-[#FF6610] text-white h-12 w-[6rem] rounded-xl text-base hover:bg-[#FF7A30] active:bg-[#FF8F50]"
            >
              Edit
            </button>

            {/* <span className="text-red-600 text-[0.8rem] italic">
              (All fields marked * are required)
            </span> */}
          </div>

          <div className="flex flex-col mb-5 mx-auto">
            <label htmlFor="facebook" className="ml-2  mb-2">
              Brand Description
              <span className="text-red-600">*</span>
            </label>
            <textarea
              disabled={isDisabled}
              className="rounded-xl h-[10rem] sm:min-w-[35rem] text-sm ring-grey-200 ring-1 p-4"
              placeholder="In a few words, tell us about your brand..."
              name="description"
              value={brand.description}
            ></textarea>
            {errors && (
              <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                {errors.description}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:flex items-center sm:justify-between mx-auto md:w-[40rem]">
            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="website">
                Business Name<span className="text-red-600">*</span>
              </label>
              <input
                disabled={isDisabled}
                className="p-2 rounded-lg w-full"
                type="text"
                name="business_name"
                placeholder="Enter your Brand name"
                value={brand.business_name || ""}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.business_name}
                </div>
              )}
            </div>

            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="website">
                Website<span className="text-red-600">*</span>
              </label>
              <input
                disabled={isDisabled}
                className="p-2 rounded-lg w-full"
                type="text"
                name="website"
                placeholder="https://"
                value={brand.website || ""}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.website}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] items-center sm:flex mx-auto">
            <SelectPlatform
              disabled={isDisabled}
              name="preferred_platform"
              value={brand.preferred_platform}
              errors={errors.preferred_platform}
              label="Preferred Platform"
              required="*"
            />
            <SelectCategory
              disabled={isDisabled}
              name="category"
              value={brand.category}
              errors={errors.category}
              label="Main Content Category"
              required="*"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] items-center sm:flex mx-auto">
            <SelectAudience
              disabled={isDisabled}
              label="Target Audience"
              required="*"
              value={brand.target_audience}
              errors={errors.target_audience}
              name="target_audience"
            />
            <SelectAudienceAge
              disabled={isDisabled}
              label="Audience Age"
              required="*"
              value={brand.audience_age}
              errors={errors.audience_age}
              name="audience_age"
            />
          </div>
          <div className="grid grid-cols-1 content-center gap-4 md:gap-[6rem] items-center sm:flex mx-auto">
            <SelectInfluencerType
              disabled={isDisabled}
              label="Preferred Influencer Type"
              required="*"
              name="influencer_type"
              value={brand.influencer_type}
              error={errors.influencer_type}
            />
            <div className="flex flex-col w-[17rem] items-center">
              <label className="ml-2 mb-2" htmlFor="">
                Budget
              </label>
              <div className="flex items-center w-full justify-center">
                <div className="">
                  <SelectCurrency
                    disabled={isDisabled}
                    name="currency"
                    value={brand.currency}
                  />
                </div>
                <SelectEarning
                  disabled={isDisabled}
                  name="budget_range"
                  value={brand.budget_range || ""}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col m-6">
              <button className="mx-auto bg-[#FF6610] text-white h-12 w-[12rem] rounded-xl text-base hover:bg-[#FF7A30] active:bg-[#FF8F50]">
                Update
              </button>
            </div>
          </div>

          {/* <Logo /> */}
        </form>
      </div>
    </>
  );
};

export default Profile;
