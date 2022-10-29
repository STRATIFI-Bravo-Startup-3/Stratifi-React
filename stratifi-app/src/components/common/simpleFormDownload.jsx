import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import { saveAs } from "file-saver";
var FileSaver = require("file-saver");
// a basic form
const SimpleFormDownload = ({
  status,
  message,
  className,
  style,
  onSubmitted,
}) => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  let input;
  const submit = async () => {
    input &&
      input.value.indexOf("@") > -1 &&
      (await onSubmitted({
        EMAIL: input.value,
      }));
    FileSaver.saveAs("https://httpbin.org/image", "image.jpg");
  };

  return (
    <div className="flex flex-col gap-2 my-auto">
      <div className="flex flex-col mx-auto w-11/12 lg:w-3/4">
        <input
          ref={(node) => (input = node)}
          className="rounded-xl text-sm w-11/12 h-12 lg:w-3/4 mx-auto"
          type="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="flex flex-col items-start">
        {status === "sending" && (
          <div
            className="text-sm w-8/12 mx-auto mb-3"
            style={{ color: "#16a34a" }}
          >
            sending...
          </div>
        )}
        {status === "error" && (
          <div
            style={{ color: "#b91c1c" }}
            className="text-sm w-8/12 mx-auto mb-3"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="text-sm w-8/12 mx-auto mb-3"
            style={{ color: "#16a34a" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <button
          onClick={submit}
          className="mx-auto bg-[#FF8F50] text-white h-12 w-[16rem] rounded-xl text-base hover:bg-orange-600 active:bg-orange-700"
        >
          Download Now
        </button>
      </div>
    </div>
  );
};

export default SimpleFormDownload;
