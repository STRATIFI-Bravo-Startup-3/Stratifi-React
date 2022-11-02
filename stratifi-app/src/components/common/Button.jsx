const Button = (props) => {
  return (
    <button className="mx-auto bg-[#FF8F50] text-white h-12 w-[16rem] rounded-xl text-base hover:bg-orange-600 active:bg-orange-700">
      {props.label}
    </button>
  );
};

export default Button;
