import React, { Component } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const ChooseAcount = () => {
  const [account, setAccount] = useState({
    type: "",
  });
  const [error, setError] = useState("");
  const route = useRouter();

  const validate = () => {
    let error = "";
    const newAccount = { ...account };
    if (newAccount.type === "") {
      error = "Please select one option";
    }
    console.log(error);
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = validate();
    setError(newError || "");
    if (newError) return;
    console.log("Submitted");
    route.push("/brand-information");
  };

  return (
    <div className="flex justify-center  h-screen  bg-tertiary">
      <div className="flex flex-col gap-4 justify-center my-auto w-4/5 lg:w-5/12 h-auto rounded-xl shadow-2xl animate__animated animate__flipInX bg-secondary">
        <div className="flex flex-col mx-auto mt-5 gap-4">
          <h1 className=" mx-auto text-xl lg:text-2xl font-bold text-gray-800">
            Complete your profile
          </h1>
          <span className="text-center text-gray-800 text-sm lg:text-base">
            Choose an Account Type
          </span>

          <form className="mx-auto flex flex-col gap-2" onSubmit={handleSubmit}>
            <select
              className="rounded-lg w-[10rem] p-2 bg-gray-100"
              name="type"
              id=""
              onChange={(e) => setAccount({ ...account, type: e.target.value })}
            >
              <option value="">Choose one ...</option>
              <option value="Influencer">Influencer</option>
              <option value="Brand">Brand</option>
            </select>
            {error && (
              <div className=" text-[0.7rem] lg:text-sm text-red-600">
                {error}
              </div>
            )}
            <div className="flex flex-col mb-5">
              <button className="mx-auto bg-[#FF8F50] text-white h-12 w-[10rem] rounded-xl text-base hover:bg-orange-600 active:bg-orange-700">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChooseAcount;
