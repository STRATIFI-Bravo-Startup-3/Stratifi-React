import React from "react";

const Input = ({ name, placeholder, error, onChange, value, autoFocus }) => {
  return (
    <div className="flex flex-col ">
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        name={name}
        className="rounded-xl w-11/12 h-14 lg:w-3/4 mx-auto "
        type="text"
        placeholder={placeholder}
      />
      {error && <div className="ml-20 text-red-600">{error}</div>}
    </div>
  );
};

export default Input;
