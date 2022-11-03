import backgroundfooter from "../images/backgroundfooter.svg";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import GoHome from "../components/common/GoHome";

const EmailVerification = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundfooter})` }}
      className="flex justify-center  h-screen relative"
    >
      <div className="absolute top-10 left-10">
        <GoHome />
      </div>
      <div className="flex flex-col gap-4 justify-center my-auto bg-white w-4/5 lg:w-5/12 h-auto rounded-xl shadow-2xl animate__animated animate__flipInX">
        <div className="flex flex-col mx-auto mt-5 gap-2">
          <h1 className=" mx-auto text-xl lg:text-2xl font-bold text-gray-800">
            Verification Email Sent.
          </h1>
          <span className="text-center text-gray-800 text-sm lg:text-base">
            Please verify your email to continue.
          </span>
          <span className="text-center text-gray-800 text-sm lg:text-base">
            Check your spam folder if not found in inbox.
          </span>
        </div>

        <div className="flex flex-col gap-2 mx-auto mb-5">
          <span className="text-center text-gray-800 text-sm">
            Didn't recieve any email?{" "}
            <Link className="underline underline-offset-2 text-sm">
              Resend email
            </Link>
          </span>
          <div className="items-center flex flex-col  ">
            <img className="mx-auto w-[3rem]" src={logo} alt="" srcSet="" />
            <span className="font-black text-slate-700 text-lg my-auto">
              STRATIFI.NG
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
