import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import NavBar from "@/components/NavBar";
import { FormInput } from "@/components/form";

// Create User Schema for form data validation
const schema = z
  .object({
    email: z.string().nonempty({ message: "Email address is required" }).email({ message: "Invalid email address" }),
    password: z.string().nonempty({ message: "Password is required" }).min(5, { message: "Password must be 5 or more characters long" }),
    confirmPassword: z.string().nonempty({ message: "Confirm password is required" }).min(5, { message: "Confirm password must be 5 or more characters long" }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    { message: "Passwords do not match", path: ["confirmPassword"] }
  );

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
    console.log(`Errors gotten`);
    console.log(data);
  };

  return (
    <div className="h-screen w-full bg-blogPry overflow-x-auto">
      <NavBar />
      <div className="pb-[3rem]">
        <div className="w-[88vw] max-w-[400px] mx-auto my-6 px-6 py-[3rem] sm:px-[2rem] bg-[white] rounded shadow">
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
            {/* Form description */}
            <div className="flex flex-col gap-y-3">
              <h1 className="font-bold text-2xl md:text-3xl text-center">Create your account</h1>
              <p className="text-xs text-center sm:text-[0.8rem] font-mono">Get featured and connect with brands perfect for your profile.</p>
            </div>

            {/* Form input fields */}
            <div className="flex flex-col gap-y-5 mt-7">
              <FormInput type="email" placeholder="Email" {...register("email")} error={errors?.email?.message} />
              <FormInput type="password" placeholder="Password" {...register("password")} error={errors?.password?.message} />
              <FormInput type="password" placeholder="Confirm password" {...register("confirmPassword")} error={errors?.confirmPassword?.message} />
            </div>

            {/* Form options */}
            <div className="mt-3">
              <div className="flex gap-x-2 text-xs items-center">
                <label htmlFor="">Remember me</label>
                <input className="w-[15px] h-[15px]" type="checkbox" value={true} {...register("remember")} />
              </div>
            </div>

            {/* Form submit buttons */}
            <button type="submit" className="mt-9 rounded-sm py-4 w-full bg-blogPry text-[white] text-[16px] font-bold">
              Next
            </button>

            {/* Route to sign up page */}
            <div className="text-xs mt-3">
              I agree to the <span className="text-blue-700">Terms and conditions</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




