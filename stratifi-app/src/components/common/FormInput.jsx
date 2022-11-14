const FormInput = ({ onChange, name, error, value, placeholder, label }) => {
  return (
    <div className="w-[17rem] flex flex-col">
      <label htmlFor="website" className="ml-2 mb-2">
        {label}
        <span className="text-red-600">*</span>
      </label>
      <input
        onChange={onChange}
        value={value}
        className="rounded-xl text-sm w-full h-10 mx-auto"
        name={name}
        placeholder={placeholder}
        type="text"
      />
      {error && (
        <div className="ml-2 text-[0.7rem] lg:text-[0.8rem] text-red-600">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;
