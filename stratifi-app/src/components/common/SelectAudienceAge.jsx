const SelectAudienceAge = ({
  value,
  onChange,
  name,
  errors,
  label,
  required,
}) => {
  return (
    <div className="flex flex-col w-[17rem]">
      <label htmlFor="audience" className="ml-2 mb-2">
        {label}
        <span className="text-red-600">{required}</span>
      </label>
      {/* <span className="text-sm">
        (This is the platform you're most active in)
      </span> */}
      <select
        className="rounded-xl"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Choose one ...</option>
        <option value="Young Adults (21 - 29)">Young Adults (21 - 29)</option>
        <option value="Adults (30 - 40)">Adults (30 - 40)</option>
        <option value="Middle Aged (40 - 50)">Middle Aged (40 - 50)</option> 
        <option value="Older (60 and above)">Older (60 and above)</option> 
      </select>
      {errors && (
        <div className=" text-[0.7rem] ml-1 lg:text-[0.8rem] text-red-600">
          {errors}
        </div>
      )}
    </div>
  );
};

export default SelectAudienceAge;
