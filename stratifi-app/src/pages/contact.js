import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import Joi from "joi-browser";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  // const imageUrl =
  //   useWindowWidth() >= 650 ? contactBackground : contactBackgroundSmall;

  const SERVICE_ID = "service_6pqkwl5";
  const TEMPLATE_ID = "template_vok9xgx";
  const USER_ID = "5Y3o8rm4LH3pWWuEF";

  const [account, setAccount] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const schema = {
    fullname: Joi.string().min(2).required().label("Name"),
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
    setIsLoading(true);

    const error = validate();

    setErrors(error || {});
    // console.log(errors);
    if (error) {
      setIsLoading(false);
      return;
    }

    // const templateParams = { ...account };
    // console.log(templateParams);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact_form", USER_ID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
        setIsLoading(false);
      },
      (err) => {
        console.log("FAILED!", err);
        Swal.fire({
          icon: "error",
          title: "Oops! Something went wrong!",
          // text: error.text,
          confirmButtonColor: "#AD6EC0",
        });
        setIsLoading(false);
      }
    );
  };

  const renderButton = () => {
    if (isLoading)
      return (
        <button className="mx-auto active:bg-[#FF8F50] text-white h-12 w-[16rem] rounded-xl text-base hover:bg-[#FF7A30] bg-[#FF6610] ">
          <div className="flex gap-2 justify-center items-center">
            <AiOutlineLoading3Quarters className="animate-spin" /> Sending...
          </div>
        </button>
      );
    else {
      return (
        <button className="mx-auto active:bg-[#FF8F50] text-white h-12 w-[16rem] rounded-xl text-base hover:bg-[#FF7A30] bg-[#FF6610] ">
          Send Message
        </button>
      );
    }
  };

  return (
    <div className="">
      <NavBar />
      <div className="h-screen relative bg-contact">
        <form
          id="contact_form"
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-8 h-full w-full animate__animated animate__flipInX "
        >
          <div className="flex flex-col items-center justify-center w-full md:w-[40rem] shadow-lg rounded-lg bg-secondary py-12">
            <div className="font-bold text-4xl text-white p-4">
              <h1>Contact Us</h1>
            </div>
            <div className=" w-5/6 flex flex-col gap-4 text-black p-4">
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  placeholder="Full name"
                  onChange={handleChange}
                  name="fullname"
                  className="mx-auto w-11/12 rounded-lg lg:w-[30rem] py-2 px-4 bg-white"
                />
                {errors && (
                  <div className="ml-6 text-[0.7rem] lg:text-[0.8rem] text-red-800 ">
                    {errors.fullname}
                  </div>
                )}
              </div>

              <div className="grid w-11/12 mx-auto grid-cols-1 gap-4 lg:grid-cols-2 lg:mx-auto lg:w-[30rem]">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Email address"
                    onChange={handleChange}
                    name="email"
                    className="rounded-lg w-full py-2 px-4 bg-white"
                    error={errors.email}
                  />
                  {errors && (
                    <div className="ml-1 text-[0.7rem] lg:text-[0.8rem] text-red-800">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="flex flex-col ">
                  <input
                    type="text"
                    placeholder="Phone number"
                    onChange={handleChange}
                    name="phone"
                    className="rounded-lg w-full py-2 px-4 bg-white"
                  />
                  {errors && (
                    <div className=" ml-1 text-[0.7rem] lg:text-[0.8rem] text-red-800">
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <textarea
                  type="textarea"
                  placeholder="Message"
                  name="message"
                  className="w-11/12 lg:w-[30rem] h-[10rem] mx-auto rounded-lg py-2 px-4 bg-white"
                  onChange={handleChange}
                />
                {errors && (
                  <div className="ml-6 text-[0.7rem] lg:text-sm text-red-800">
                    {errors.message}
                  </div>
                )}
              </div>
              {renderButton()}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
