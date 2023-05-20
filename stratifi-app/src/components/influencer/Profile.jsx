import { useState } from "react";
import { useRouter } from "next/router";
import SelectCurrency from "../common/SelectCurrency";
import SelectInfluencerType from "../common/SelectInfluencerType";
import SelectAudienceAge from "../common/SelectAudienceAge";
import SelectCategory from "../common/SelectCategory";
import SelectPlatform from "../common/SelectPlatform";
import SelectAudience from "../common/SelectAudience";
import SelectEarning from "../common/SelectEarning";
import SelectRegion from "../common/SelectRegion";
import UploadPicture from "../common/UploadPicture";

const Profile = () => {
  const [influencer, setInfluencer] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  const toggleEdit = (e) => {
    e.preventDefault();
    setIsDisabled(false);
  };

  return (
    <>
      <div className="m-4 flex flex-col items-center w-full py-4 text-sm animate__animated animate__fadeIn">
        <div className="h-[10rem] w-[10rem] rounded-full ring-2 ring-gray-300 flex flex-col items-center justify-center">
          <h1 className="border-b pt-12 pb-2 border-gray-300 text-xs text-gray-500">
            Change Profile Picture
          </h1>
        </div>
        <form
          disabled
          // onSubmit={handleSubmit}
          className="flex flex-col px-4 md:px-8 m-[1rem] items-center rounded-xl  gap-4 animate__animated animate__fadeInDown  shadow-slate-800"
        >
          <div className="mt-6 flex items-center gap-2 w-full py-8 justify-between">
            <h1 className="text-center text-sm md:text-base font-bold text-slate-800 mx-2">
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

          <div className="grid grid-cols-1 gap-4 sm:flex items-center sm:justify-between mx-auto md:w-[40rem]">
            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="facebook">
                Facebook<span className="text-red-600">*</span>
              </label>
              <input
                className="p-2 rounded-lg w-full bg-[#F9E5FF]"
                type="text"
                name="facebook"
                placeholder="Enter your Facebook Page"
                value={influencer.facebook || ""}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.facebook}
                </div>
              )}
            </div>

            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="instagram">
                Instagram<span className="text-red-600">*</span>
              </label>
              <input
                disabled={isDisabled}
                className="p-2 rounded-lg w-full bg-[#F9E5FF]"
                type="text"
                name="instagram"
                placeholder="Enter your instagram @"
                value={influencer.instagram || ""}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.instagram}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex items-center md:justify-between mx-auto md:w-[40rem]">
            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="tiktok">
                TikTok<span className="text-red-600">*</span>
              </label>
              <input
                disabled={isDisabled}
                className="p-2 rounded-lg w-full bg-[#F9E5FF]"
                type="text"
                name="tiktok"
                placeholder="Enter your TikTok @"
                value={influencer.tiktok || ""}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.tiktok}
                </div>
              )}
            </div>

            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="twitter">
                Twitter<span className="text-red-600">*</span>
              </label>
              <input
                disabled={isDisabled}
                className="p-2 rounded-lg w-full bg-[#F9E5FF]"
                type="text"
                name="twitter"
                placeholder="Enter your Twitter @"
                value={influencer.twitter || ""}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.twitter}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex items-center md:justify-between mx-auto md:w-[40rem]">
            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="youtube">
                Youtube<span className="text-red-600">*</span>
              </label>
              <input
                disabled={isDisabled}
                className="p-2 rounded-lg w-full bg-[#F9E5FF]"
                type="text"
                name="youtube"
                placeholder="Enter your Youtube channel"
                value={influencer.youtube || ""}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.youtube}
                </div>
              )}
            </div>

            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="website">
                Blog/Website
              </label>
              <input
                disabled={isDisabled}
                className="p-2 rounded-lg w-full bg-[#F9E5FF]"
                type="text"
                name="website"
                placeholder="https://"
                value={influencer.website || ""}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] items-center md:flex mx-auto">
            <SelectPlatform
              disabled={isDisabled}
              name="main_platform"
              value={influencer.main_platform}
              errors={errors.main_platform}
              label="Main Platform"
              required="*"
            />
            <SelectRegion
              disabled={isDisabled}
              name="category"
              value={influencer.category}
              errors={errors.category}
              label="Region of Influence"
              required="*"
            />
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
