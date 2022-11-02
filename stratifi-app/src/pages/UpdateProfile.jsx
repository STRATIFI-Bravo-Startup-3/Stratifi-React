import React from "react";

class UpdateProfile extends Component{
    state = {
    account: {
      firstname: "",
      lastname: "",
      birthday: "",
      gender: "",
      location: "",
    },
    errors: {},
  };

  schema = {
    firstname: Joi.string().min(1).max(20).required().label("First name"),
    lastname: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required()
      .label("Lastname"),
    birthday: Joi.string().min("2001-01-01").required().label("Birthday"),
    gender: Joi.any()
      .valid(Joi.ref("gender"))
      .required()
      .options({ language: { any: { allowOnly: "do not match" } } }),
    location: Joi.string().required(),
  };

  validateOnChange = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);

    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    console.log(errors);
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render(){
    return(
          <div
            className="static flex flex-col"
            style={{ backgroundImage: `url(${backgroundfooter})` }}
          >
            <div className="flex flex-col gap-4  justify-center my-[10rem] bg-white w-4/5 lg:w-5/12 h-auto rounded-xl shadow-2xl animate__animated animate__fadeInDown">
              <div className="flex flex-col mx-auto mt-5">
                <h1 className=" mx-auto text-xl lg:text-2xl font-bold text-gray-800">
                  My profile
                </h1>
              </div>

              <div>
                <form
                  action="#"
                  className="flex
                flex-col
                gap-4
                justify-center"
                >
                  <div className="mt-5 flex gap-4 flex-col mx-auto w-11/12 lg:w-3/4">
                    <label htmlFor="">First Name</label>
                    <input
                      value={account.firstname}
                      onChange={this.handleChange}
                      type="text"
                      className="border border-gray-400 py-1 px-2 w-full"
                      error={errors.firstname}
                    ></input>
                  </div>

                  <div className="mt-5 flex gap-4 flex-col mx-auto w-11/12 lg:w-3/4">
                    Last name
                    <input
                      value={account.lastname}
                      onChange={this.handleChange}
                      type="text"
                      className="border border-gray-400 py-1 px-2 w-full"
                      error={errors.lastname}
                    ></input>
                  </div>

                  <div className="mt-5 flex gap-4 flex-col mx-auto w-11/12 lg:w-3/4">
                    Birthday
                    <input
                      value={account.birthday}
                      onChange={this.handleChange}
                      type="text"
                      className="border border-gray-400 py-1 px-2 w-full"
                      error={errors.birthday}
                    ></input>
                  </div>

                  <div className="mt-5 flex gap-4 flex-col mx-auto w-11/12 lg:w-3/4">
                    Gender
                    <input
                      value={account.gender}
                      onChange={this.handleChange}
                      type="text"
                      className="border border-gray-400 py-1 px-2 w-full"
                      error={errors.gender}
                    ></input>
                  </div>

                  <div className="mt-5 flex gap-4 flex-col mx-auto w-11/12 lg:w-3/4">
                    Location
                    <input
                      value={account.location}
                      onChange={this.handleChange}
                      type="text"
                      className="border border-gray-400 py-1 px-2 w-full"
                      error={errors.location}
                    ></input>
                  </div>

                  <Dropdown />

                  {/* <div className="mt-10 mx-10 space-y-6">
                  <h2 className="mt-5 gap-4 mx-auto">Categories</h2>

                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="  mx-auto">Animals/pets</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Arts/entertainment</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Beauty</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Business/technology</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Family/parenting</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Food/drinks</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Fashion</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Gaming</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Health/fitness</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Home</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Lifestyle</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Sports</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Travel</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                    <p className="mx-auto">Others</p>
                  </div>
      </div> */}
                </form>
                {/* submit section */}
                <div className="flex justify-center items-center mt-10">
                  <input
                    type="submit"
                    value="submit"
                    className="mx-auto bg-[#FF8F50] text-white h-10 w-[10rem] rounded-xl text-2xl hover:bg-orange-600 active:bg-orange-700"
                  />
                </div>
              </div>
              <div>
                <div className="max-w-[240px] m-auto py-4 text-center">
                  {<GoogleButton />}
                </div>
              </div>
            </div>
          </div>
    )
  }
}
