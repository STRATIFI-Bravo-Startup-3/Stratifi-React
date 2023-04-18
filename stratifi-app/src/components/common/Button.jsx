const Button = (props) => {
  return (
    <button className="mx-auto active:bg-[#FF8F50] text-white h-12 w-auto px-4 rounded-xl text-base hover:bg-[#FF7A30] bg-[#FF6610] ">
      {props.label}
    </button>
  );
};

export default Button;
