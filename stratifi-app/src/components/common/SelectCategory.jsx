const SelectCategory = ({ disabled, value, onChange, name, errors, label, required }) => {
  return (
    <div className="flex flex-col w-[17rem]">
      <label htmlFor="main_category" className="mb-1">
        {label}
        <span className="text-red-600">{required}</span>
      </label>
      {/* <span className="text-sm">
        (This is the platform you're most active in)
      </span> */}
      <select
      disabled={disabled}
        className="rounded-lg p-2"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Choose one ...</option>
        <option value="A bit of Everything">A bit of Everything</option>
        <option value="Health / Fitness">Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Fashion / Beauty">Fashion / Beauty</option>
        <option value="Lifestyle / Interior Design">
          Lifestyle / Interiors
        </option>
        <option value="Arts / Culture">Arts / Culture</option>
        <option value="Business / Finance">Business / Finance</option>
        <option value="Tech / Computers">Tech / Computers</option>
        <option value="Sports">Fitness / Sports</option>
        <option value="Other">Other</option>
      </select>
      {errors && (
        <div className=" text-[0.7rem] ml-1 lg:text-[0.8rem] text-red-600">
          {errors}
        </div>
      )}
    </div>
  );
};

export default SelectCategory;
