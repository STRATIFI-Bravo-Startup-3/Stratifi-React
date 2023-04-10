import React, { Component } from "react";
import GoHome from "../components/common/GoHome";
import Input from "../components/common/input";
import Link from "next/link";
import Joi from "joi-browser";

class ResetPassword extends Component {
  state = {
    account: {
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
  };

  validateOnChange = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);

    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    // console.log(errors);
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

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
          <div className="flex flex-col mx-auto mt-5 gap-2">
            <h1 className=" mx-auto text-xl lg:text-2xl font-bold text-gray-800">
              Password Reset
            </h1>
            <span className="text-center text-gray-800 text-sm lg:text-base">
              Enter your email to continue.
            </span>
            <form
              className="flex flex-col gap-6 lg:w-[20rem] w-[18rem] mx-auto "
              onSubmit={this.handleSubmit}
            >
              <Input
                onChange={this.handleChange}
                error={errors.email}
                value={account.email}
                autoFocus
                name="email"
                placeholder="Email Address"
                type="email"
              />
              <button className="mx-auto active:bg-[#FF8F50] text-white h-12 w-11/12 lg:w-3/4 rounded-xl text-base hover:bg-[#FF7A30] bg-[#FF6610] ">
                Continue
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-2 mx-auto mb-5">
            <span className="text-center text-gray-800 text-sm">
              {`Didn't recieve any email?`}
              <Link className="underline underline-offset-2 text-sm">
                Resend email
              </Link>
            </span>
            <div className="items-center flex flex-col  ">
              <span className="font-black text-slate-700 text-lg my-auto">
                STRATIFI.NG
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
