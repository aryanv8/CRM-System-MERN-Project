import React, { useEffect, useState } from "react";
import "../styles/UserForm.css";

function UserForm(props) {
  //setting all input fields
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  //storing values in array
  const data = [
    fname,
    lname,
    email,
    pwd,
    phone,
    dob,
    gender,
    image,
    company,
    job,
    country,
    address,
  ];

  //validating the image type
  function validateFileType() {
    var fileName = document.getElementById("image").value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      //TO DO
      setImage(fileName);
    } else {
      alert("Only jpg/jpeg or png files are allowed!");
      document.getElementById("image").value = "";
    }
  }

  useEffect(() => {
    // setting all input fields with already saved values
    props.fnameValue && setFname(props.fnameValue);
    props.lnameValue && setLname(props.lnameValue);
    props.emailValue && setEmail(props.emailValue);
    props.phoneValue && setPhone(props.phoneValue);
    props.dobValue && setDob(props.dobValue);
    props.genderValue && setGender(props.genderValue);
    props.companyValue && setCompany(props.companyValue);
    props.jobValue && setJob(props.jobValue);
    props.countryValue && setCountry(props.countryValue);
    props.addressValue && setAddress(props.addressValue);
  }, [props.genderValue]);

  const formSubmit = () => {
    props.getState(data);
    console.log("Inside UserForm: ", data);
  };

  return (
    <div className="container-fluid signup">
      <div className="container bg-dark was-validated">
        <h3 className="mt-10">{props.heading}</h3>

        <div className="mb-3">
          <label for="fname" className="form-label float-start">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="Enter your First Name"
            required
            onChange={(e) => setFname(e.target.value)}
            defaultValue={props.fnameValue}
          />
        </div>

        <div className="mb-3">
          <label for="lname" className="form-label float-start">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Enter your Last Name"
            required
            onChange={(e) => setLname(e.target.value)}
            defaultValue={props.lnameValue}
          />
        </div>

        <div className="mb-3">
          <label for="email" className="form-label float-start">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={props.emailValue}
          />
        </div>

        <div className="mb-3">
          <label for="pwd" className="form-label float-start">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder={props.passwordPlaceholder}
            minLength={8}
            maxLength={16}
            required={props.passwordRequirement}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label for="phone" className="form-label float-start">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter your Phone no"
            maxLength={10}
            required
            onChange={(e) => setPhone(e.target.value)}
            defaultValue={props.phoneValue}
          />
        </div>

        <div className="mb-3">
          <label for="dob" className="form-label float-start">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            placeholder="DOB"
            required
            onChange={(e) => setDob(e.target.value)}
            defaultValue={props.dobValue}
          />
        </div>

        <div className="mb-3">
          <label className="form-label float-start">Gender:</label>
          <div className="form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="male"
              name="gender"
              value="male"
              required
              checked={gender === "male"}
              // checked
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label mx-2" for="male">
              {" "}
              Male
            </label>
          </div>
          <div className="form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="female"
              name="gender"
              value="female"
              required
              checked={gender === "female"}
              // checked={props.genderValue === "female"}
              // checked
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label mx-2" for="female">
              {" "}
              Female
            </label>
          </div>
          <div className="form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="others"
              name="gender"
              value="other"
              required
              checked={gender === "other"}
              // checked={props.genderValue === "other"}
              // checked
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label mx-2" for="others">
              Others
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label for="image" className="form-label float-start">
            {props.imgLabel}
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="image"
            required={props.imgRequirement}
            onChange={(e) => setImage(e.target.files[0])}
            // defaultValue={props.imageValue}
          />
        </div>

        <div className="mb-3">
          <label for="company" className="form-label float-start">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Enter your Company Name"
            required
            onChange={(e) => setCompany(e.target.value)}
            defaultValue={props.companyValue}
          />
        </div>

        <div className="mb-3">
          <label for="job" className="form-label float-start">
            Job Title
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="title"
            required
            onChange={(e) => setJob(e.target.value)}
            defaultValue={props.jobValue}
          >
            <option disabled="" label="Job Title" selected="" value="">
              Job Title
            </option>
            <option
              value="Sales_Manager_AP"
              selected={props.jobValue === "Sales_Manager_AP"}
            >
              Sales Manager
            </option>
            <option
              value="Marketing_PR_Manager_AP"
              selected={props.jobValue === "Marketing_PR_Manager_AP"}
            >
              Marketing / PR Manager
            </option>
            <option
              value="Customer_Service_Manager_AP"
              selected={props.jobValue === "Customer_Service_Manager_AP"}
            >
              Customer Service Manager
            </option>
            <option
              value="CxO_General_Manager_AP"
              selected={props.jobValue === "CxO_General_Manager_AP"}
            >
              CxO / General Manager
            </option>
            <option
              value="IT_Manager_AP"
              selected={props.jobValue === "IT_Manager_AP"}
            >
              IT Manager
            </option>
            <option
              value="Operations_Manager_AP"
              selected={props.jobValue === "Operations_Manager_AP"}
            >
              Operations Manager
            </option>
            <option value="Developer" selected={props.jobValue === "Developer"}>
              Developer / Software Engineer / Analyst
            </option>
            <option
              value="Student / Personal Interest"
              selected={props.jobValue === "Student / Personal Interest"}
            >
              Student / Personal Interest
            </option>
            <option value="Others_AP" selected={props.jobValue === "Others_AP"}>
              Others
            </option>
          </select>
        </div>

        <div className="mb-3">
          <label for="country" className="form-label float-start">
            Country/Region
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="country"
            required
            onChange={(e) => setCountry(e.target.value)}
            defaultValue={props.countryValue}
          >
            <option selected="" disabled="" value="">
              Choose your Region
            </option>
            <option
              selected={props.countryValue === "Australia"}
              value="Australia"
            >
              Australia
            </option>
            <option selected={props.countryValue === "Austria"} value="Austria">
              Austria
            </option>
            <option
              selected={props.countryValue === "Bangladesh"}
              value="Bangladesh"
            >
              Bangladesh
            </option>
            <option
              selected={props.countryValue === "Beligium"}
              value="Beligium"
            >
              Belgium
            </option>
            <option selected={props.countryValue === "Brazil"} value="Brazil">
              Brazil
            </option>
            <option selected={props.countryValue === "Canada"} value="Canada">
              Canada
            </option>
            <option selected={props.countryValue === "China"} value="China">
              China
            </option>
            <option
              selected={props.countryValue === "HongKong"}
              value="HongKong"
            >
              Hong Kong
            </option>
            <option
              selected={props.countryValue === "Colombia"}
              value="Colombia"
            >
              Colombia
            </option>
            <option selected={props.countryValue === "France"} value="France">
              France
            </option>
            <option selected={props.countryValue === "India"} value="India">
              India
            </option>
            <option
              selected={props.countryValue === "Indonesia"}
              value="Indonesia"
            >
              Indonesia
            </option>
            <option selected={props.countryValue === "Ireland"} value="Ireland">
              Ireland
            </option>
            <option selected={props.countryValue === "Israle"} value="Israle">
              Israel
            </option>
            <option selected={props.countryValue === "Italy"} value="Italy">
              Italy
            </option>
            <option selected={props.countryValue === "Jamaica"} value="Jamaica">
              Jamaica
            </option>
            <option selected={props.countryValue === "Japan"} value="Japan">
              Japan
            </option>
            <option selected={props.countryValue === "US"} value="US">
              United States
            </option>
            <option
              selected={props.countryValue === "Malaysia"}
              value="Malaysia"
            >
              Malaysia
            </option>
            <option
              selected={props.countryValue === "Maldives"}
              value="Maldives"
            >
              Maldives
            </option>
            <option selected={props.countryValue === "Zambia"} value="Zambia">
              Zambia
            </option>
            <option
              selected={props.countryValue === "Zimbabwe"}
              value="Zimbabwe"
            >
              Zimbabwe
            </option>
          </select>
        </div>

        <div className="mb-3">
          <label for="address" className="form-label float-start">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            placeholder="Provide your Address"
            required
            onChange={(e) => setAddress(e.target.value)}
            defaultValue={props.addressValue}
          ></textarea>
        </div>

        {/* if it's Registration is shows terms&conditoins checkbox */}
        {props.terms}

        <button
          type="submit"
          className="btn btn-outline-warning w-50 mt-4"
          onClick={formSubmit}
        >
          {props.btnName}
        </button>

        {/* if it's Registration is shows login option */}
        {props.login}
      </div>
    </div>
  );
}

UserForm.defaultProps = {
  fnameValue: "",
  lnameValue: "",
  emailValue: "",
  pwdValue: "",
  phoneValue: "",
  dobValue: "",
  jobValue: "",
  companyValue: "",
  countryValue: "",
  addressValue: "",
  imageValue: "",
  terms: "",
  login: "",
  btnName: "Submit",
  heading: "Registration Form",
  imgRequirement: true,
  passwordRequirement: true,
  passwordPlaceholder: "Set your Password",
  imgLabel: "Upload image",
  genderValue: "",
};

export default UserForm;
