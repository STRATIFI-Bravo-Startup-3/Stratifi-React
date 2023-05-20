import { useState } from "react";
import { useRouter } from "next/router";
import Joi from "joi-browser";
import Logo from "../components/common/Logo";
import SelectCategory from "../components/common/SelectCategory";
import SelectPlatform from "../components/common/SelectPlatform";
import SelectAudience from "../components/common/SelectAudience";
import SelectAudienceAge from "../components/common/SelectAudienceAge";
import UploadPicture from "../components/common/UploadPicture";
import SelectRegion from "@/components/common/SelectRegion";
import Layout from "./layout";

const InfluencerInformation = () => {
  const [influencer, setInfluencer] = useState({});
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const schema = {
    website: Joi.string().label("Website"),
    facebook: Joi.string().required().label("Facebook"),
    instagram: Joi.string().required().label("Instagram"),
    tiktok: Joi.string().required().label("TikTok"),
    twitter: Joi.string().required().label("Twitter"),
    youtube: Joi.string().required().label("Youtube"),
    main_platform: Joi.string().required().label("Main Platform"),
    audience_age: Joi.string().required().label("Audience Age"),
    target_audience: Joi.string().required().label("Target Audience"),
    category: Joi.string().required().label("Main Category"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(influencer, schema, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateOnChange = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaValidate = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaValidate);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const error = { ...errors };
    const errorMessage = validateOnChange(input);

    if (errorMessage) {
      error[input.name] = errorMessage;
    } else {
      delete error[input.name];
    }

    const data = { ...influencer };
    data[input.name] = input.value;
    setInfluencer(data);
    setErrors(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors || {});
    if (newErrors) return;
    // console.log("Submitted");
    router.push("/influencer/dashboard");
  };

  return (
    <Layout>
      <div className=" flex flex-col text-[0.92rem] text-slate-800 bg-brand py-24">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-secondary lg:w-[50rem] lg:mx-auto m-[1rem] items-center rounded-xl  gap-4 animate__animated animate__fadeInDown shadow-lg shadow-slate-800"
        >
          <div className="mt-6 flex flex-col items-center gap-2 mx-auto px-4">
            <h1 className="text-center text-lg font-bold text-slate-800">
              Almost there! Just a few more steps
            </h1>
            <span className="text-sm lg:w-[25rem] text-center">
              Help us get the best match for you. Fill the form below to
              continue
            </span>
            {/* <span className="text-red-600 text-[0.8rem] italic">
              (All fields marked * are required)
            </span> */}
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex items-center md:justify-between mx-auto md:w-[40rem]">
            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="facebook">
                Facebook<span className="text-red-600">*</span>
              </label>
              <input
                className="p-2 rounded-lg w-full"
                type="text"
                name="facebook"
                placeholder="Enter your Facebook Page"
                value={influencer.facebook || ""}
                onChange={handleChange}
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
                className="p-2 rounded-lg w-full"
                type="text"
                name="instagram"
                placeholder="Enter your instagram @"
                value={influencer.instagram || ""}
                onChange={handleChange}
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
                className="p-2 rounded-lg w-full"
                type="text"
                name="tiktok"
                placeholder="Enter your TikTok @"
                value={influencer.tiktok || ""}
                onChange={handleChange}
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
                className="p-2 rounded-lg w-full"
                type="text"
                name="twitter"
                placeholder="Enter your Twitter @"
                value={influencer.twitter || ""}
                onChange={handleChange}
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
                className="p-2 rounded-lg w-full"
                type="text"
                name="youtube"
                placeholder="Enter your Youtube channel"
                value={influencer.youtube || ""}
                onChange={handleChange}
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
                className="p-2 rounded-lg w-full"
                type="text"
                name="website"
                placeholder="https://"
                value={influencer.website || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] items-center md:flex mx-auto">
            <SelectPlatform
              name="main_platform"
              value={influencer.main_platform}
              onChange={handleChange}
              errors={errors.main_platform}
              label="Main Platform"
              required="*"
            />
            <SelectCategory
              name="category"
              value={influencer.category}
              onChange={handleChange}
              errors={errors.category}
              label="Main Content Category"
              required="*"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] items-center md:flex mx-auto">
            <SelectAudience
              label="Target Audience"
              required="*"
              value={influencer.target_audience}
              errors={errors.target_audience}
              onChange={handleChange}
              name="target_audience"
            />
            <SelectAudienceAge
              label="Audience Age"
              required="*"
              value={influencer.audience_age}
              errors={errors.audience_age}
              onChange={handleChange}
              name="audience_age"
            />
          </div>
          <div className="grid grid-cols-1 content-center gap-4 md:gap-[6rem] items-center md:flex mx-auto">
            <SelectRegion
              name="category"
              value={influencer.category}
              onChange={handleChange}
              errors={errors.category}
              label="Region of Influence"
              required="*"
            />
            <div className="flex flex-col w-[17rem]">
              <UploadPicture />
            </div>
          </div>

          <div>
            <div className="flex flex-col m-6">
              <button className="mx-auto bg-[#FF6610] text-white h-12 w-[12rem] rounded-xl text-base hover:bg-[#FF7A30] active:bg-[#FF8F50]">
                Submit
              </button>
            </div>
          </div>

          <Logo />
        </form>
      </div>
    </Layout>
  );
};

export default InfluencerInformation;
