const SelectRegion = ({
  disabled,
  name,
  value,
  onChange,
  label,
  errors,
  required,
}) => {
  return (
    <div className="flex flex-col w-[17rem]">
      <label htmlFor="main_region" className="mb-1">
        {label}
        <span className="text-red-600">{required}</span>
      </label>

      <select
        disabled={disabled}
        className="rounded-lg p-2 bg-[#F9E5FF]"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Choose one ...</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="North Americas">North America</option>
        <option value="South Americas">South America</option>
      </select>
      {errors && (
        <div className=" text-[0.7rem] ml-1 lg:text-[0.8rem] text-red-600">
          {errors}
        </div>
      )}
    </div>
  );
};

export default SelectRegion;
