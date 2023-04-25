import { useState } from "react";
import { useRouter } from "next/router";
import Joi from "joi-browser";
import Logo from "../components/common/Logo";
import SelectCategory from "../components/common/SelectCategory";
import SelectEarning from "../components/common/SelectEarning";
import SelectCurrency from "../components/common/SelectCurrency";
import SelectPlatform from "../components/common/SelectPlatform";
import SelectAudience from "../components/common/SelectAudience";
import SelectAudienceAge from "../components/common/SelectAudienceAge";
import SelectInfluencerType from "../components/common/SelectInfluencerType";
import NavBar from "@/components/NavBar";
import UploadPicture from "../components/common/UploadPicture";

const BrandInformation = () => {
  const [brand, setBrand] = useState({});
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const schema = {
    description: Joi.string().required().min(50).label("Description"),
    website: Joi.string().required().label("Website"),
    business_name: Joi.string().required().label("Business Name"),
    // preferred_platform: Joi.string().required().label("Preferred Platform"),
    audience_age: Joi.string().required().label("Audience Age"),
    target_audience: Joi.string().required().label("Target Audience"),
    category: Joi.string().required().label("Category"),
    // influencer_type: Joi.string().required().label("Influencer Type"),
    budget_range: Joi.string().required().label("Budget Range"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(brand, schema, options);
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

    const data = { ...brand };
    data[input.name] = input.value;
    setBrand(data);
    setErrors(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors || {});
    if (newErrors) return;
    // console.log("Submitted");
    router.push("/brand/dashboard");
  };

  return (
    <>
      <NavBar />
      <div className=" flex flex-col text-[0.92rem] text-slate-700 bg-brand py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-secondary lg:w-[50rem] lg:mx-auto m-[1rem] items-center rounded-xl  gap-4 animate__animated animate__fadeInDown shadow-lg shadow-slate-800"
        >
          <div className="mt-6 flex flex-col items-center gap-2 mx-auto px-4">
            <h1 className="text-center text-lg font-bold text-slate-800">
              Almost there! Just a few more steps
            </h1>
            <span className="text-sm lg:w-[25rem] text-center">
              Help us find the right Influencer for your Brand. Fill the form
              below to continue
            </span>
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
              className="rounded-xl h-[10rem] w-[18rem] md:w-[40rem] text-sm ring-grey-200 ring-1 p-4"
              placeholder="In a few words, tell us about your brand..."
              name="description"
              value={brand.description}
              onChange={handleChange}
            ></textarea>
            {errors && (
              <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                {errors.description}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex items-center md:justify-between mx-auto md:w-[40rem]">
            <div className="w-[17rem]">
              <label className="mb-1" htmlFor="website">
                Business Name<span className="text-red-600">*</span>
              </label>
              <input
                className="p-2 rounded-lg w-full"
                type="text"
                name="business_name"
                placeholder="Enter your Brand name"
                value={brand.business_name || ""}
                onChange={handleChange}
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
                className="p-2 rounded-lg w-full"
                type="text"
                name="website"
                placeholder="https://"
                value={brand.website || ""}
                onChange={handleChange}
              />
              {errors && (
                <div className=" text-[0.7rem] w-[16rem] md:w-[40rem] ml-2 lg:text-[0.8rem] text-red-600">
                  {errors.website}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] items-center md:flex mx-auto">
            {/* <SelectPlatform
              name="preferred_platform"
              value={brand.preferred_platform}
              onChange={handleChange}
              errors={errors.preferred_platform}
              label="Preferred Platform"
              required="*"
            /> */}
            {/* <SelectCategory
              name="category"
              value={brand.category}
              onChange={handleChange}
              errors={errors.category}
              label="Main Content Category"
              required="*"
            /> */}
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] items-center md:flex mx-auto">
            <SelectAudience
              label="Target Audience"
              required="*"
              value={brand.target_audience}
              errors={errors.target_audience}
              onChange={handleChange}
              name="target_audience"
            />
            <SelectAudienceAge
              label="Audience Age"
              required="*"
              value={brand.audience_age}
              errors={errors.audience_age}
              onChange={handleChange}
              name="audience_age"
            />
          </div>
          <div className="grid grid-cols-1 content-center gap-4 md:gap-[6rem] items-center md:flex mx-auto">
            <SelectCategory
              name="category"
              value={brand.category}
              onChange={handleChange}
              errors={errors.category}
              label="Main Content Category"
              required="*"
            />
            {/* <SelectInfluencerType
              label="Preferred Influencer Type"
              required="*"
              name="influencer_type"
              value={brand.influencer_type}
              onChange={handleChange}
              error={errors.influencer_type}
            /> */}
            <div className="flex flex-col w-[17rem]">
              {/* <div className="">
                  <SelectCurrency
                    name="currency"
                    value={brand.currency}
                    onChange={handleChange}
                  />
                </div>
                <SelectEarning
                  name="budget_range"
                  value={brand.budget_range || ""}
                  onChange={handleChange}
                /> */}
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
    </>
  );
};

export default BrandInformation;
