const SelectRegion = ({ name, value, onChange, label, errors, required }) => {
  return (
    <div className="flex flex-col w-[17rem]">
      <label htmlFor="main_region" className="ml-2 mb-2">
        {label}
        <span className="text-red-600">{required}</span>
      </label>
      {/* <span className="text-sm">
      (This is the platform you're most active in)
    </span> */}
      <select className="rounded" name={name} value={value} onChange={onChange}>
        <option value="">Choose one ...</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Ghana">Ghana</option>
        <option value="Kenya">Kenya</option>
        <option value="South Africa">South Africa</option>
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
