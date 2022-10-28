import React, { Component } from "react";
import { useState } from "react";
// import '' from "joi-browser";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().min(3).required().label("Username"),
    password: Joi.string().required().label("Password"),
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

    for (let item of result.error.details)
      errors[(item.path[0] = item.message)];

    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(input);

    account[e.currentTarget] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="bg-[#AD6EC0] flex flex-col justify-center ">
          <form className="max-w-[400px] w-full mx-auto bg-white p-4">
            <h2 className="text-4xl font-bold text-center py-6">STRATIFI</h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2" type="text" />
            </div>

            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                onChange={this.handleChange}
                value={this.state.account.password}
                name="password"
                className="border p-2"
                type="password"
              />
            </div>
            <button className="border w-full my-3 py-2 bg-[#FF8F50] hover:bg-orange-400 text-white">
              Sign In
            </button>
            <div className="flex justify-between">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Rememeber Me
              </p>
              <p>Create an account</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
