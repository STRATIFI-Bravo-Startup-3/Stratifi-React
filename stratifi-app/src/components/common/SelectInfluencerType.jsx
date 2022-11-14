const SelectInfluencerType = ({
  value,
  onChange,
  name,
  error,
  label,
  required,
}) => {
  return (
    <div className="flex flex-col w-[17rem]">
      <label htmlFor={name} className="ml-2 mb-2">
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
        <option value="Nano Influencer">
          Nano Influencer (1k - 10k Followers)
        </option>
        <option value="Micro Influencer">
          Micro Influencer (10k - 100k Followers)
        </option>
        <option value="Macro Influencer">
          Macro Influencer (100k - 1M Followers)
        </option>
        <option value="Celebrity Influencer">
          Celebrity Influencer (1M + Followers)
        </option>
         
      </select>
      {error && (
        <div className=" text-[0.7rem] ml-1 lg:text-[0.8rem] text-red-600">
          {error}
        </div>
      )}
    </div>
  );
};

export default SelectInfluencerType;
