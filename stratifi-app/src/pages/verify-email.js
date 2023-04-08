import React, { Component } from "react";
import Input from "../components/common/input";
import Joi from "joi-browser";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";

const VerifyEmail = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <div className="bg">
      <NavBar />
      <div className="static flex flex-col bg-tertiary ">
        <div className="flex justify-center  h-screen ">
          <div className="h-[15rem] flex flex-col gap-4 justify-center my-auto bg-secondary w-4/5 lg:w-6/12 rounded-xl shadow-2xl animate__animated animate__flipInX">
            <div className="flex flex-col mx-auto mt-5 text-white gap-4 justify-center items-center">
              <h1 className=" mx-auto text-xl lg:text-2xl font-bold ">
                Verify your Email
              </h1>
              <span className="text-center text-sm lg:text-base px-4 md:px-8">
                An email has been sent to{" "}
                <span className="text-blue-800">{email}</span> for verificaton.
                Be sure to check your spam folder
              </span>

              <a href="/account-type">
                <button className="mx-auto active:bg-[#FF8F50] text-white h-12 w-11/12  md:w-[10rem]  rounded-xl text-base hover:bg-[#FF7A30] bg-[#FF6610]">
                  Continue
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
