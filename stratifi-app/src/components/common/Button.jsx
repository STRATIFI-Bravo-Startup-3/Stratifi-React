const Button = ({ label }) => {
  return (
    <button className="mx-auto active:bg-[#FF8F50] text-white h-12 w-auto px-4 rounded-xl text-base hover:bg-[#FF7A30] bg-[#FF6610] transition duration-500 ease-in-out delay-100 hover:scale-105 hover:translate-y-1 cursor-pointer">
      {label}
    </button>
  );
};

export default Button;
