const ButtonSm = (props) => {
  return (
    <button className="active:bg-[#FF8F50] text-white h-12 w-[8rem] rounded-xl hover:bg-[#FF7A30] bg-[#FF6610] px-2 ransition duration-500 ease-in-out delay-100 hover:scale-105 hover:translate-y-1 cursor-pointer">
      {props.label}
    </button>
  );
};

export default ButtonSm;
