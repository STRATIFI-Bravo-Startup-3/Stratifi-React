import React from "react";

export const FormInput = React.forwardRef(({ name, onBlur, type, placeholder, error, onChange }, ref) => {
  return (
    <div className="flex flex-col w-full">
      {error && <p className="text-xs text-red-700 font-mono">{error}</p>}
      <input
        className={`w-full p-4 text-gray-700 text-[16px] rounded-sm bg-formFieldBg focus:border-[1px] border-gray-300 focus:border-blogPry outline-none`}
        type={type}
        placeholder={placeholder}
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});

