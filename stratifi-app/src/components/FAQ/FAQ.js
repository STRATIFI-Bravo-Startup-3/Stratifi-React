import React from "react";

function FAQ({ props }) {
  return (
    <div>
      <button
        className="accordion"
        style="
              position: absolute;
              width: 1394.45px;
              height: 101.15px;
              left: 56.42px;
              top: 2596.59px;
              background: rgba(0, 0, 0, 0.25);
              border-radius: 8px;"
      >
        {props.text}
      </button>
    </div>
  );
}

export default FAQ;
