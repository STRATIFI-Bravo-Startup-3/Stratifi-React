const SelectEarning = ({ value, onChange, name, error }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 justify-center">
        <div>
          <input
            onChange={onChange}
            value={value}
            className="rounded-lg p-2 text-sm w-11/12 mx-auto"
            name={name}
            placeholder="0"
            type="text"
          />
          {error && (
            <div className="ml-2 text-[0.7rem] lg:text-[0.8rem] text-red-600">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectEarning;
