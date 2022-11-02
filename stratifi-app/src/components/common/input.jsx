import React from "react";

const Input = ({ name, placeholder, error, onChange, value, autoFocus }) => {
  return (
    <div className="flex flex-col ">
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        name={name}
        className="rounded-xl text-sm w-11/12 h-12 lg:w-3/4 mx-auto "
        type="text"
        placeholder={placeholder}
      />
      {error && (
        <div className="lg:ml-16 ml-5 text-[0.7rem] lg:text-sm text-red-600">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
