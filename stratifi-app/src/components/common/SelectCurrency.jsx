const SelectCurrency = ({ disabled, value, onChange, name }) => {
  return (
    <div className=" px-1">
      <select
      disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
        className="rounded-lg p-2"
      >
        <option value="USD">$</option>
        <option value="NGN">₦</option>
      </select>
    </div>
  );
};

export default SelectCurrency;
