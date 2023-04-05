import React, { Component } from "react";
import Input from "../components/common/input";
import Joi from "joi-browser";
import GoHome from "../components/common/GoHome";

class Login extends Component {
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
    password: Joi.string().required().label("Password"),
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
          <div className="flex flex-col mx-auto mt-5">
            <h1 className=" mx-auto text-xl lg:text-2xl font-bold text-gray-800">
              Sign In
            </h1>
            <span className="text-center text-gray-800 text-sm lg:text-base">
              Log into your account to continue
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
            </div>
            <div className="flex flex-col">
              <button className="mx-auto active:bg-[#FF8F50] text-white h-12 w-[16rem] rounded-xl text-base hover:bg-[#FF7A30] bg-[#FF6610] ">
                Log in
              </button>
            </div>
          </form>
          <div className="flex flex-col mx-auto mb-5">
            <span className="text-center text-gray-800 text-sm mb-5">
              <a className="underline underline-offset-2 text-sm" href="">
                Forgot Password?{" "}
              </a>
            </span>
            <span className="text-center text-gray-800 text-sm">
              Don't have an account yet?{" "}
              <a
                className="underline underline-offset-2 text-sm"
                href="/register"
              >
                Sign Up
              </a>
            </span>
            <div className="items-center flex flex-col  ">
              <img className="mx-auto w-[3rem]" src="" alt="" srcSet="" />
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

export default Login;
