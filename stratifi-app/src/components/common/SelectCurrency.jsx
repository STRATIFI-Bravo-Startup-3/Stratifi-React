const SelectCurrency = ({ value, onChange, name }) => {
  return (
    <div className="w-[6rem]">
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="rounded-xl"
      >
        <option value="USD">USD</option>
        <option value="NGN">₦</option>
      </select>
    </div>
  );
};

export default SelectCurrency;
