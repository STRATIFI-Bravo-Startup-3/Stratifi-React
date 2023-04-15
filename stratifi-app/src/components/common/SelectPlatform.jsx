const SelectPlatform = ({
  disabled,
  value,
  onChange,
  name,
  errors,
  label,
  required,
}) => {
  return (
    <div className="flex flex-col w-[17rem]">
      <label htmlFor="main_platform" className="mb-1">
        {label}
        <span className="text-red-600">{required}</span>
      </label>
      {/* <span className="text-sm">
      (This is the platform you're most active in)
    </span> */}
      <select
        disabled={disabled}
        className="rounded-lg p-2 bg-[#F9E5FF]"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Choose one ...</option>
        <option value="Instagram">Instagram</option>
        <option value="Twitter">Twitter</option>
        <option value="Facebook">Facebook</option>
        <option value="Youtube">Youtube</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="TikTok">TikTok</option>
      </select>
      {errors && (
        <div className=" text-[0.7rem] ml-1 lg:text-[0.8rem] text-red-600">
          {errors}
        </div>
      )}
    </div>
  );
};

export default SelectPlatform;
