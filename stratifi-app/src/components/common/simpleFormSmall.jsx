import React from "react";

// a basic form
const SimpleFormSmall = ({
  status,
  message,
  className,
  style,
  onSubmitted,
}) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value,
    });

  return (
    <div>
      <div
        className="flex  form-input h-10 w-64 mt-5 rounded p-1"
        style={style}
      >
        <input
          ref={(node) => (input = node)}
          className="text-sm border-0 p-0 focus:ring-0 w-0 grow text-center text-black"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className=" block px-4 bg-[#FF8F50] hover:bg-[#FF7A30] active:bg-[#FF6610] ring-1 ring-[#FF7A30] rounded"
          onClick={submit}
        >
          Subscribe
        </button>
      </div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

export default SimpleFormSmall;
