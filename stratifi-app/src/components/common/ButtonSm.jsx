const ButtonSm = (props) => {
  return (
    <button className="active:bg-[#FF8F50] text-white h-12 w-[8rem] rounded-xl hover:bg-[#FF7A30] bg-[#FF6610] px-2">
      {props.label}
    </button>
  );
};

export default ButtonSm;
