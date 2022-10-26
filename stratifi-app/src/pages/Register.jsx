import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Input from "../components/common/input";
import Joi from "joi-browser";

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
    username: Joi.string().alphanum().min(3).max(15).required(),
    password: Joi.string().required(),
    repeat_password: Joi.ref("password"),
    email: Joi.string().required(),
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    // return Object.keys(errors).length === 0 ? null : errors;
    console.log(result);
  };

  validateOnChange = (input) => {};

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
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
      <div className="flex justify-center login-background h-screen">
        <div className="flex flex-col gap-4 justify-center my-auto bg-slate-200 w-4/5 lg:w-6/12 h-3/5 lg:h-4/5 rounded-3xl shadow-2xl">
          <div className="flex flex-col mx-auto">
            <h1 className="font-bold text-4xl text-gray-800">
              Create An Account
            </h1>
            <span className="text-center text-gray-800 text-lg lg:text-base">
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
                value={account.username}
                onChange={this.handleChange}
                name="username"
                placeholder="Username"
                type="text"
                error={errors.username}
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
                error={errors.password}
              />
            </div>
            <div className="flex flex-col ">
              <button className="mx-auto bg-orange-500 text-white h-16 w-40 rounded-xl text-xl hover:bg-orange-600 active:bg-orange-700">
                Create Account
              </button>
            </div>
          </form>
          <div className="flex flex-col mx-auto ">
            <span className="text-center text-gray-800 text-lg lg:text-base">
              Already have an account?{" "}
              <Link
                className="underline underline-offset-2 text-lg"
                to="/login"
              >
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
