import React, { Component } from "react";
import backgroundfooter from "../images/backgroundfooter.svg";
import Input from "../components/common/input";
import Logo from "../components/common/Logo";
import SelectCategory from "../components/common/SelectCategory";
import SelectAudience from "../components/common/SelectAudience";
import SelectAudienceAge from "../components/common/SelectAudienceAge";
import SelectInfluencerType from "../components/common/SelectInfluencerType";
import SelectEarning from "../components/common/SelectEarning";
import SelectCurrency from "../components/common/SelectCurrency";

class InfluencerInformation2 extends Component {
  state = {
    account: {
      main_category: "",
      secondary_category: "",
      audience: "",
      audience_age: "",
      influencer_level: "",
      estimated_earning: "",
      currency: "",
    },
    errors: {},
  };

  requiredFields = [
    "main_category",
    "secondary_category",
    "audience",
    "audience_age",
    "influencer_level",
  ];

  validate = (info) => {
    let errors = {};
    const account = { ...this.state.account };
    for (let items of info) {
      if (account[items] === "") {
        errors[items] = "This field is required";
      }
    }

    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.requiredFields);
    this.setState({ errors: errors || {} });
    if (Object.keys(errors).length > 0) return;

    console.log("Submitted");
  };

  render() {
    const { account, errors } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ backgroundImage: `url(${backgroundfooter})` }}
        className=" flex flex-col text-[0.92rem] text-slate-700 lg:h-screen"
      >
        <div className="flex flex-col bg-white lg:w-[50rem] lg:mx-auto m-[2rem] rounded-xl items-center gap-6 animate__animated animate__fadeInDown shadow-lg shadow-slate-800">
          <div className="mt-6 flex flex-col items-center gap-4">
            <h1 className="text-center text-lg font-bold text-slate-800">
              Almost there! Just a few more steps
            </h1>
            <span className="text-sm px-3 lg:w-[25rem] text-center">
              Fill the form below to continue, carefully ensure you enter the
              correct details
            </span>
            <span className="text-red-600 text-[0.8rem] italic">
              (All fields marked * are required)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-16 md:flex">
            <SelectCategory
              name="main_category"
              value={account.main_category}
              onChange={this.handleChange}
              errors={errors.main_category}
              label="Main Content Category"
              required="*"
            />
            <SelectCategory
              name="secondary_category"
              value={account.secondary_category}
              onChange={this.handleChange}
              errors={errors.secondary_category}
              label="Secondary Content Category"
              required="*"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-16 md:flex">
            <SelectAudience
              name="audience"
              value={account.audience}
              onChange={this.handleChange}
              errors={errors.audience}
              label="Select your Main Audience"
              required="*"
            />
            <SelectAudienceAge
              name="audience_age"
              value={account.audience_age}
              onChange={this.handleChange}
              errors={errors.audience_age}
              label="Select your Audience Age"
              required="*"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-16 md:flex">
            <SelectInfluencerType
              name="influencer_level"
              value={account.influencer_level}
              onChange={this.handleChange}
              errors={errors.influencer_level}
              label="What level of influencer are you?"
              required="*"
            />
            <div className="flex flex-col">
              <label className="ml-2 mb-2" htmlFor="">
                Estimated Earnings <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center justify-center">
                <SelectEarning
                  name="estimated_earning"
                  value={account.estimated_earning}
                  onChange={this.handleChange}
                />
                <div className="">
                  <SelectCurrency
                    name="currency"
                    value={account.currency}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col m-6">
              <button className="mx-auto bg-[#FF6610] text-white h-12 w-[5rem] md:w-[12rem] rounded-xl text-base hover:bg-[#FF7A30] active:bg-[#FF8F50]">
                Back
              </button>
            </div>
            <div className="flex flex-col m-6">
              <button className="mx-auto bg-[#FF6610] text-white h-12 w-[5rem] md:w-[12rem] rounded-xl text-base hover:bg-[#FF7A30] active:bg-[#FF8F50]">
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

export default InfluencerInformation2;
