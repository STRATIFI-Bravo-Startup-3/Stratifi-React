import React, { Component } from "react";
import Joi from "joi-browser";
import "../App.css";
import Logo from "../components/common/Logo";
import SelectCategory from "../components/common/SelectCategory";
import Input from "../components/common/input";
import SelectEarning from "../components/common/SelectEarning";
import SelectCurrency from "../components/common/SelectCurrency";
import InputWebsite from "../components/common/FormInput";
import SelectPlatform from "../components/common/SelectPlatform";
import SelectAudience from "../components/common/SelectAudience";
import SelectAudienceAge from "../components/common/SelectAudienceAge";
import SelectInfluencerType from "../components/common/SelectInfluencerType";
import FormInput from "../components/common/FormInput";

export default class BrandInformation extends Component {
  state = {
    brand: {
      description: "",
      website: "",
      preferred_platform: "",
      secondary_platform: "",
      target_audience: "",
      category: "",
      audience_age: "",
      influencer_type: "",
      budget_range: "",
      currency: "USD",
    },
    errors: {},
  };

  requiredFields = [
    "description",
    "website",
    "main_platform",
    "preferred_platform",
    "audience_age",
    "target_audience",
    "category",
    "influencer_type",
  ];

  validate = (info) => {
    let errors = {};
    const brand = { ...this.state.brand };
    for (let items of info) {
      if (brand[items] === "") {
        errors[items] = "This field is required";
      }
    }
    if (typeof parseInt(brand.budget_range) !== "number") {
      errors.budget_range = "This field must be a number";
    }
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const brand = { ...this.state.brand };
    brand[input.name] = input.value;
    this.setState({ brand, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.requiredFields);
    this.setState({ errors: errors || {} });
    if (Object.keys(errors).length > 0) return;

    console.log("Submitted");
  };

  render() {
    const { brand, errors } = this.state;
    return (
      <form
        className=" flex flex-col text-[0.92rem] text-slate-700"
        onSubmit={this.handleSubmit}
      >
        <div className="flex flex-col bg-white lg:w-[50rem] lg:mx-auto m-[2rem] items-center rounded-xl  gap-6 animate__animated animate__fadeInDown shadow-lg shadow-slate-800">
          <div className="mt-6 flex flex-col items-center gap-4 mx-auto">
            <h1 className="text-center text-lg font-bold text-slate-800">
              Almost there! Just a few more steps
            </h1>
            <span className="text-sm px-3 lg:w-[25rem] text-center">
              Help us find the right Influencer for your Brand. Fill the form
              below to continue
            </span>
            <span className="text-red-600 text-[0.8rem] italic">
              (All fields marked * are required)
            </span>
          </div>

          <div className="flex flex-col mb-5 mx-auto">
            <label htmlFor="facebook" className="ml-2  mb-2">
              Brand Description
              <span className="text-red-600">*</span>
            </label>
            <textarea
              className="rounded-xl h-[10rem] w-[16rem] md:w-[40rem] text-sm"
              placeholder="In a few words, tell us about your brand..."
              name="description"
              value={brand.description}
              onChange={this.handleChange}
            ></textarea>
            {errors && (
              <div className=" text-[0.7rem] ml-2 lg:text-[0.8rem] text-red-600">
                {errors.description}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[5rem] md:justify-between md:flex mx-auto md:w-[40rem]">
            <FormInput
              name="website"
              label="Blog/Website"
              placeholder="https://"
              error={errors.website}
              value={brand.website}
              onChange={this.handleChange}
            />

            <SelectCategory
              name="category"
              value={brand.category}
              onChange={this.handleChange}
              errors={errors.category}
              label="Main Content Category"
              required="*"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] md:flex mx-auto">
            <SelectPlatform
              name="preferred_platform"
              value={brand.preferred_platform}
              onChange={this.handleChange}
              errors={errors.preferred_platform}
              label="Preferred Platform"
              required="*"
            />
            <SelectPlatform
              name="secondary_platform"
              value={brand.secondary_platform}
              onChange={this.handleChange}
              errors={errors.secondary_platform}
              label="Secondary Platform"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] md:flex mx-auto">
            <SelectAudience
              label="Target Audience"
              required="*"
              value={brand.target_audience}
              errors={errors.target_audience}
              onChange={this.handleChange}
              name="target_audience"
            />
            <SelectAudienceAge
              label="Audience Age"
              required="*"
              value={brand.audience_age}
              errors={errors.audience_age}
              onChange={this.handleChange}
              name="audience_age"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-[6rem] md:flex mx-auto">
            <SelectInfluencerType
              label="Preferred Influencer Type"
              required="*"
              name="influencer_type"
              value={brand.influencer_type}
              onChange={this.handleChange}
              error={errors.influencer_type}
            />
            <div className="flex flex-col w-[17rem]">
              <label className="ml-2 mb-2" htmlFor="">
                Budget
              </label>
              <div className="flex items-center w-full justify-center justify-items-center align-middle">
                <SelectEarning
                  name="budget_range"
                  value={brand.budget_range}
                  onChange={this.handleChange}
                />

                <div className="my-auto">
                  <SelectCurrency
                    name="currency"
                    value={brand.currency}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
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
        </div>
      </form>
    );
  }
}
