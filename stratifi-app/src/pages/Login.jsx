import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import NavBar from "@/components/NavBar";
import { FormInput } from "@/components/form";

// Create User Schema for form data validation
const schema = z.object({
  email: z.string().nonempty({ message: "Email address is required" }).email({ message: "Invalid email address" }),
  password: z.string().nonempty({ message: "Password is required" }).min(5, { message: "Password must be 5 or more characters long" }),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("Details about to be submitted!");
    console.log(data);
    alert("Details gotten, implementation coming soon");
  };

  const onErrors = (data) => {
    console.log(`Errors gotten`)
    console.log(data)
  }

  return (
    <div className="h-screen w-full bg-blogPry">
      <NavBar />
      <div>
        <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[88vw] max-w-[400px] shadow px-6 py-[4rem] sm:px-[2rem] bg-[white] rounded">
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
            {/* Form description */}
            <div className="flex flex-col gap-y-3">
              <h1 className="font-bold text-2xl md:text-3xl text-center">Welcome to Stratifi</h1>
              <p className="text-xs text-center sm:text-[0.8rem] font-mono">Welcome back! Please enter your details</p>
            </div>

            {/* Form input fields */}
            <div className="flex flex-col gap-y-5 mt-7">
              <FormInput type="email" placeholder="Email" {...register("email")} error={errors?.email?.message} />
              <FormInput type="password" placeholder="Password" {...register("password")} error={errors?.password?.message} />
            </div>

            {/* Form options */}
            <div className="flex justify-between mt-3">
              <div className="flex gap-x-2 text-xs items-center">
                <label htmlFor="">Remember me</label>
                <input className="w-[15px] h-[15px]" type="checkbox" value={true} {...register("remember")} />
              </div>
              <a href="#" className="text-blue-700 text-xs">
                forgot password
              </a>
            </div>

            {/* Form submit buttons */}
            <button type="submit" className="mt-9 rounded-sm py-4 w-full bg-blogPry text-[white] text-[16px] font-bold">
              Next
            </button>

            {/* Route to sign up page */}
            <div className="text-xs mt-3">
              Don't have an account <span className="text-blue-700">Sign up</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




