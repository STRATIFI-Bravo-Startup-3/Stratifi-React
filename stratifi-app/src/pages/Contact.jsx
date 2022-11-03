import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import contactBackground from "../images/contact-background.png";
import contactBackgroundSmall from "../images/contact-background-sm.png";
import useWindowWidth from "../components/common/windowWidth";
import { useState } from "react";
import Input from "../components/common/input";
import Button from "../components/common/Button";
import Joi from "joi-browser";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const imageUrl =
    useWindowWidth() >= 650 ? contactBackground : contactBackgroundSmall;

  const SERVICE_ID = "service_6pqkwl5";
  const TEMPLATE_ID = "template_vok9xgx";
  const USER_ID = "5Y3o8rm4LH3pWWuEF";

  const [account, setAccount] = useState({});
  const [errors, setErrors] = useState({});

  const schema = {
    fullname: Joi.string().min(2).required().label("Password"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.number().required().label("Phone"),
    message: Joi.string().min(10).required().label("Message"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(account, schema, options);

    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateOnChange = ({ name, value }) => {
    // Destructured to take in name(e.currentTarget.name) and
    // value(e.currentTarget.value)
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    // currentTarget destructured and refrenced as 'input'
    // currentTarget destructured and refrenced as 'input'
    const error = { ...errors };
    const errorMessage = validateOnChange(input);

    if (errorMessage) {
      error[input.name] = errorMessage;
    } else {
      delete error[input.name];
    }

    const data = { ...account };
    data[input.name] = input.value;
    setAccount(data);
    setErrors(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    setErrors({ errors: error || {} });
    if (error) return;
    const templateParams = { ...account };
    console.log(templateParams);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact_form", USER_ID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (err) => {
        console.log("FAILED!", err);
        Swal.fire({
          icon: "error",
          title: "Oops! Something went wrong!",
          text: error.text,
          confirmButtonColor: "#AD6EC0",
        });
      }
    );
  };

  return (
    <div>
      <NavBar />
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="h-screen relative "
      >
        <form
          id="contact_form"
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-8 h-full w-full animate__animated animate__flipInX "
        >
          <div className="font-bold text-4xl text-white mt-[4rem] lg:mt-[8rem]">
            <h1>Contact Us</h1>
          </div>
          <div className=" w-5/6 lg:w-[40rem]  flex flex-col gap-4 text-black ">
            <Input
              type="text"
              placeholder="Full name"
              onChange={handleChange}
              name="fullname"
              error={errors.fullname}
            />
            <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-2 lg:mx-auto lg:w-[34rem]">
              <Input
                type="text"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                error={errors.email}
              />
              <Input
                type="text"
                placeholder="Phone number"
                onChange={handleChange}
                name="phone"
                error={errors.phone}
              />
            </div>
            <textarea
              type="textarea"
              placeholder="Message"
              name="message"
              className="w-11/12 lg:w-[30rem] h-[10rem] mx-auto rounded"
              onChange={handleChange}
            />
            {errors && (
              <div className="lg:ml-20 ml-5 text-[0.7rem] lg:text-sm text-red-600">
                {errors.message}
              </div>
            )}
          </div>
          <Button label="Send Message" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
