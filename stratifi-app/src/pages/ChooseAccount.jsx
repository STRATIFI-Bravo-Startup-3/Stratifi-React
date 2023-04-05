import React, { Component } from "react";

import GoHome from "../components/common/GoHome";

class ChooseAccount extends Component {
  state = {
    account: {
      mode: "",
    },
    errors: {},
  };

  validate = () => {
    let errors = {};
    const account = { ...this.state.account };
    if (account.mode === "") {
      errors.mode = "Please select one option";
    }
    console.log(errors);
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="flex justify-center  h-screen relative">
        <div className="absolute top-10 left-10">
          <GoHome />
        </div>
        <div className="flex flex-col gap-4 justify-center my-auto bg-white w-4/5 lg:w-5/12 h-auto rounded-xl shadow-2xl animate__animated animate__flipInX">
          <div className="flex flex-col mx-auto mt-5 gap-4">
            <h1 className=" mx-auto text-xl lg:text-2xl font-bold text-gray-800">
              Choose an Account Type
            </h1>
            <span className="text-center text-gray-800 text-sm lg:text-base">
              Are you an Influencer or a Brand? Select below
            </span>

            <form
              className="mx-auto flex flex-col gap-2"
              onSubmit={this.handleSubmit}
            >
              <select
                className="rounded"
                name="mode"
                id=""
                onChange={this.handleChange}
              >
                <option value="">Choose one ...</option>
                <option value="Influencer">Influencer</option>
                <option value="Brand">Brand</option>
              </select>
              {errors && (
                <div className=" text-[0.7rem] lg:text-sm text-red-600">
                  {errors.mode}
                </div>
              )}
              <div className="flex flex-col mb-5">
                <button className="mx-auto bg-[#FF8F50] text-white h-12 w-[8rem] rounded-xl text-base hover:bg-orange-600 active:bg-orange-700">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseAccount;
