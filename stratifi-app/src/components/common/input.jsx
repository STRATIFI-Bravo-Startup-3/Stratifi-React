import React from "react";

const Input = ({
  name,
  placeholder,
  error,
  onChange,
  value,
  autoFocus,
  type,
}) => {
  return (
    <div className="flex flex-col items-center">
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        name={name}
        className="rounded-xl text-sm w-11/12 h-10 md:w-[20rem] mx-auto px-4 py-2 bg-white text-gray-800"
        type={type}
        placeholder={placeholder}
      />
      {error && (
        <div className="ml-2 md:w-[20rem] w-11/12 text-start text-[0.7rem] md:text-[0.8rem] text-red-600">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
