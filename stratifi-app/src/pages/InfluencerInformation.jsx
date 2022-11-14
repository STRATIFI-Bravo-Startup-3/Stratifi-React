import React, { Component } from "react";
import backgroundfooter from "../images/backgroundfooter.svg";
import Input from "../components/common/input";
import Logo from "../components/common/Logo";
import SelectPlatform from "../components/common/SelectPlatform";
import SelectRegion from "../components/common/SelectRegion";
import { Link } from "react-router-dom";

class InfluencerInformation extends Component {
  state = {
    account: {
      facebook: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      linkedIn: "",
      youtube: "",
      website: "",
      main_platform: "",
      secondary_platform: "",
      main_region: "",
      secondary_region: "",
    },
    errors: {},
  };

  requiredFields = [
    "facebook",
    "instagram",
    "twitter",
    "tiktok",
    "youtube",
    "main_platform",
    "main_region",
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
        className=" flex flex-col text-[0.92rem] text-slate-700"
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

          <div className="grid grid-cols-1 gap-4 md:flex">
            <div className="flex flex-col lg:w-[25rem] w-[18rem]">
              <label htmlFor="facebook" className="ml-4 lg:ml-16 mb-2">
                Facebook
                <span className="text-red-600">*</span>
              </label>
              <Input
                onChange={this.handleChange}
                value={account.facebook}
                name="facebook"
                placeholder="Facebook profile link"
                type="text"
                error={errors.facebook}
              />
            </div>
            <div className="flex flex-col lg:w-[25rem] w-[18rem]">
              <label htmlFor="instagram" className="ml-4 lg:ml-16 mb-2">
                Instagram
                <span className="text-red-600">*</span>
              </label>
              <Input
                onChange={this.handleChange}
                value={account.instagram}
                name="instagram"
                placeholder="@"
                type="text"
                error={errors.instagram}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex">
            <div className="flex flex-col lg:w-[25rem] w-[18rem]">
              <label htmlFor="twitter" className="ml-4 lg:ml-16 mb-2">
                Twitter
                <span className="text-red-600">*</span>
              </label>
              <Input
                onChange={this.handleChange}
                value={account.twitter}
                name="twitter"
                placeholder="@"
                type="text"
                error={errors.twitter}
              />
            </div>
            <div className="flex flex-col lg:w-[25rem] w-[18rem]">
              <label htmlFor="tiktok" className="ml-4 lg:ml-16 mb-2">
                TikTok
                <span className="text-red-600">*</span>
              </label>
              <Input
                onChange={this.handleChange}
                value={account.tiktok}
                name="tiktok"
                placeholder="@"
                type="text"
                error={errors.tiktok}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex">
            <div className="flex flex-col lg:w-[25rem] w-[18rem]">
              <label htmlFor="youtube" className="ml-4 lg:ml-16 mb-2">
                Youtube
                <span className="text-red-600">*</span>
              </label>
              <Input
                onChange={this.handleChange}
                value={account.youtube}
                name="youtube"
                placeholder="Youtube channel"
                type="text"
                error={errors.youtube}
              />
            </div>
            <div className="flex flex-col lg:w-[25rem] w-[18rem]">
              <label htmlFor="website" className="ml-4 lg:ml-16 mb-2">
                Blog/Website
                <span className="text-red-600"></span>
              </label>
              <Input
                onChange={this.handleChange}
                value={account.website}
                name="website"
                placeholder="https://"
                type="text"
                error={errors.website}
              />
            </div>
          </div>

          {/* <div className="flex">
            <div className="flex flex-col lg:w-[25rem] w-[18rem]">
              <label htmlFor="linkedIn" className="ml-4 lg:ml-16 mb-2">
                LinkedIn
                <span className="text-red-600"></span>
              </label>
              <Input
                onChange={this.handleChange}
                value={account.linkedIn}
                name="linkedIn"
                placeholder="LinkedIn profile link"
                type="text"
                error={errors.linkedIn}
              />
            </div>
          </div> */}

          <div className="grid grid-cols-1 gap-4 md:flex lg:gap-[10rem]">
            <SelectPlatform
              name="main_platform"
              value={account.main_platform}
              onChange={this.handleChange}
              errors={errors.main_platform}
              label="Main Publishing Platform"
              required="*"
            />
            <SelectPlatform
              name="secondary_platform"
              value={account.secondary_platform}
              onChange={this.handleChange}
              errors={errors.secondary_platform}
              label="Secondary Publishing Platform"
              required=""
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex lg:gap-[10rem]">
            <SelectRegion
              name="main_region"
              value={account.main_region}
              onChange={this.handleChange}
              errors={errors.main_region}
              label="Main Region of Influence"
              required="*"
            />
            <SelectRegion
              name="secondary_region"
              value={account.secondary_region}
              onChange={this.handleChange}
              errors={errors.secondary_region}
              label="Secondary Region of Influence"
              required=""
            />
          </div>

          <div>
            <div className="flex flex-col m-6">
              {/* <Link to="/register/influencer/last-step"> */}
              <button className="mx-auto bg-[#FF6610] text-white h-12 w-[5rem] md:w-[12rem] rounded-xl text-base hover:bg-[#FF7A30] active:bg-[#FF8F50]">
                Next
              </button>
              {/* </Link> */}
            </div>
          </div>

          <Logo />
        </div>
      </form>
    );
  }
}

export default InfluencerInformation;
