import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Input from "../components/common/input";
import Joi from "joi-browser";
import backgroundfooter from "../images/backgroundfooter.svg";

class Register extends Component {
  state = {
    account: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      repeat_password: "",
    },
    errors: {},
  };

  schema = {
    fullname: Joi.string().min(3).required().label("Full name"),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required()
      .label("Username"),
    password: Joi.string().required().label("Password"),
    repeat_password: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .label("Passwords")
      .options({ language: { any: { allowOnly: "do not match" } } }),
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

    console.log(errors);
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
      <div
        className="static flex flex-col"
        style={{ backgroundImage: `url(${backgroundfooter})` }}
      >
        <div className="flex justify-center  h-screen">
          <div className="flex flex-col gap-4 justify-center my-auto bg-white w-4/5 lg:w-6/12 h-auto rounded-xl shadow-2xl">
            <div className="flex flex-col mx-auto mt-5">
              <h1 className=" mx-auto text-xl lg:text-2xl font-bold text-gray-800">
                Create An Account
              </h1>
              <span className="text-center text-gray-800 text-sm lg:text-base">
                Sign up to get started
              </span>
            </div>
            <form
              onSubmit={this.handleSubmit}
              className="flex
            flex-col
            gap-4
            justify-center"
            >
              <div className="flex gap-4 flex-col mx-auto w-11/12 lg:w-3/4">
                <Input
                  autoFocus="autoFocus"
                  value={account.fullname}
                  onChange={this.handleChange}
                  name="fullname"
                  placeholder="Full Name"
                  type="text"
                  error={errors.fullname}
                />

                <Input
                  value={account.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  error={errors.email}
                />
                <Input
                  value={account.password}
                  onChange={this.handleChange}
                  name="password"
                  placeholder="Password"
                  type="password"
                  error={errors.password}
                />
                <Input
                  value={account.repeat_password}
                  onChange={this.handleChange}
                  name="repeat_password"
                  placeholder="Repeat Password"
                  type="password"
                  error={errors.repeat_password}
                />
              </div>
              <div className="flex flex-col">
                <button className="mx-auto bg-[#FF8F50] text-white h-12 w-[16rem] rounded-xl text-base hover:bg-orange-600 active:bg-orange-700">
                  Create Account
                </button>
              </div>
            </form>
            <div className="flex flex-col mx-auto mb-5">
              <span className="text-center text-gray-800 text-sm">
                Already have an account?{" "}
                <Link
                  className="underline underline-offset-2 text-sm"
                  to="/login"
                >
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[15rem] absolute bottom-[2rem] invisible lg:visible left-[2rem] mx-auto bg-white shadow-lg  text-sm rounded-lg">
          <div className="grid grid-cols-1 items-center h-36">
            <div className="mx-auto w-4/6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at
              voluptatum officiis
            </div>
            <div className="flex justify-center mx-auto w-3/6">
              <button className="mx-auto text-white px-4 py-2 bg-[#FF8F50] hover:bg-[#FF7A30] active:bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
