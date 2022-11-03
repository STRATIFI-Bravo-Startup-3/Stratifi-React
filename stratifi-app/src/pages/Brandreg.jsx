import React, { Component } from "react";
import Joi from "joi-browser";
import "../App.css";

export default class Brandreg extends Component {
  state = {
    application: {
      description: "",
      website: "",
      preferred_platform: "Instagram",
      secondary_platform: "Instagram",
      target_audience: "female",
      target_age: "18-21",
      category: "arts/entertainment",
      influencer_type: " Micro influencer ( 10k - 100k followers)",
      budget_range: "",
    },
    errors: {},
  };

  schema = {
    description: Joi.string().required().label("description"),
    website: Joi.string().label("website"),
    preferred_platform: Joi.required().label("preferred_platform"),
    secondary_platform: Joi.label("secondary_platform"),
    target_audience: Joi.label("target_audience"),
    target_age: Joi.label("target_age"),
    category: Joi.label("category"),
    influencer_type: Joi.label("influencer_type"),
    budget_range: Joi.number().label("budget_range"),
  };

  validateOnChange = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // handleChange = (e) => {
  //   const application = { ...this.state.application };
  //   application[e.currentTarget.name] = e.currentTarget.value;
  //   this.setState({ application });
  //   console.log(application[e.currentTarget.name]);
  // };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.application, this.schema, options);

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
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const application = { ...this.state.account };
    application[input.name] = input.value;
    this.setState({ application, errors });
  };

  render() {
    return (
      <div className="brandregcontainer">
        <section className="brandregcontent">
          <div className="brandregheading">
            <strong>BRAND REGISTRATION FORM</strong>
            <p>Help us find the right influencer for your brand</p>
          </div>

          <form>
            <div className="loriara">
              <label>Brand description *</label>
              <textarea
                className="brandregdescribe"
                value={this.state.application.description}
                name="description"
                onChange={this.handleChange}
                type="text"
                placeholder="Description"
              />
            </div>

            <div className="loriara">
              <label>Website</label>
              <input
                className=""
                type="text"
                value={this.state.application.website}
                name="website"
                onChange={this.handleChange}
                placeholder="Website"
              />
            </div>

            <div>
              <label className="chosen">Choose a platform</label>
              <br />
              <br />
              <div className="platformchoice">
                <div className="loriara platf">
                  <label>Most Preferred platform*</label>
                  <select
                    name="preferred_platform"
                    id=""
                    onChange={this.handleChange}
                  >
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Tiktok">Tiktok</option>
                    <option value="Twiter">Twiter</option>
                  </select>
                </div>
                <div className="loriara platf">
                  <label>Secondary Platform</label>
                  <select
                    name="secondary_platform"
                    id=""
                    onChange={this.handleChange}
                  >
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Tiktok">Tiktok</option>
                    <option value="Twiter">Twiter</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="loriara">
              <label>Target Audience</label>
              <select name="target_audience" id="" onChange={this.handleChange}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div>
              <label>Target age range</label>
              <ul className="checkindbox">
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="Under 13"
                    onChange={this.handleChange}
                  />
                  <span>Under 13</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="14-17"
                    onChange={this.handleChange}
                  />
                  <span>14-17</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="18-21"
                    onChange={this.handleChange}
                  />
                  <span>18-21</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="22-27"
                    onChange={this.handleChange}
                  />
                  <span>22-27</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="28-35"
                    onChange={this.handleChange}
                  />
                  <span>28-35</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="36-45"
                    onChange={this.handleChange}
                  />
                  <span>36-45</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="46-55"
                    onChange={this.handleChange}
                  />
                  <span>46-55</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="56-65"
                    onChange={this.handleChange}
                  />
                  <span>56-65</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="target_age"
                    id=""
                    value="+65"
                    onChange={this.handleChange}
                  />
                  <span>65+</span>
                </li>
              </ul>
            </div>

            <div className="loriara">
              <label className="chosen">Choose Category</label>
              <select id="" name="category" onChange={this.handleChange}>
                <option value="animals/pets">Animals/pets</option>
                <option value="arts/entertainment">Arts/entertainment</option>
                <option value="beauty">Beauty</option>
                <option value="business/tectnology">Business/tectnology</option>
                <option value="family/parenting">Family/parenting</option>
                <option value="food/drinks">Food/drinks</option>
                <option value="fashion">Fashion</option>
                <option value="gaming">Gaming</option>
                <option value="health/fitness">Health/fitness</option>
                <option value="home">Home</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="sports">Sports</option>
                <option value="travel">Travel</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="loriara">
              <label>chosen type of influencer</label>
              <select name="influencer_type" id="" onChange={this.handleChange}>
                <option value="Nano influencer (1k - 10k following)">
                  Nano influencer (1k - 10k following)
                </option>
                <option value="Micro influencer ( 10k - 100k followers)">
                  Micro influencer ( 10k - 100k followers)
                </option>
                <option value="Macro influencer ( 100k - 1M followers)">
                  Macro influencer ( 100k - 1M followers)
                </option>
                <option value="Celebrity influencer (1M+ followers)">
                  Celebrity influencer (1M+ followers)
                </option>
              </select>
            </div>

            <div className="loriara">
              <label>Your budget range</label>
              <input
                type="text"
                name="budget_range"
                onChange={this.handleChange}
              />
            </div>
          </form>
          <div className="brandform-btn">
            <button className="brandregbtn back-brandregbtn">Back</button>
            <button className="brandregbtn">Submit my application </button>
          </div>
        </section>
      </div>
    );
  }
}
