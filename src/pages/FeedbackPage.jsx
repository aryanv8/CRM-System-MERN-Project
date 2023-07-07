import React, { useEffect, useState } from "react";
// import { MDBBtn, MDBValidation } from "mdb-react-ui-kit";
// eslint-disable-next-line
import { useParams, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import axios from "axios";

import { USER_SERVER } from "../constants";

function FeedbackPage() {
  const location = useLocation();
  // const param = useParams();
  // var pro = param.product;
  // const { productName, productId } = location.state;
  /* const [products, setProducts] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
    "Product 9",
    "Product 10",
  ]);*/
  // const [product, setProducts] = useState(param.product);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");

  // const [selectedProduct, setSelectedProduct] = useState("");
  // const [selectedProductError, setSelectedProductError] = useState("");

  const [ratingExperience, setRatingExperience] = useState(0);
  const [ratingExperienceError, setRatingExperienceError] = useState("");

  const [ratingDurability, setRatingDurability] = useState(0);
  const [ratingDurabilityError, setRatingDurabilityError] = useState("");

  const [ratingVFM, setRatingVFM] = useState(0);
  const [ratingVFMError, setRatingVFMError] = useState("");

  const [ratingEfficiency, setRatingEfficiency] = useState(0);
  const [ratingEfficiencyError, setRatingEfficiencyError] = useState("");

  const [ratingEaseOfUse, setRatingEaseOfUse] = useState(0);
  const [ratingEaseOfUseError, setRatingEaseOfUseError] = useState("");

  const [ratingOverall, setRatingOverall] = useState(0);
  const [ratingOverallError, setRatingOverallError] = useState("");

  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    // find the first name of the user from the cookie
    const uname = Cookies.get("firstname");
    // const location = useLocation();

    setProductName(location.state.name);
    setProductId(location.state.id);

    setName(uname);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (name === "") {
      setNameError("Name cannot be empty");
      flag = false;
    }
    // if (selectedProduct === "") {
    //   setSelectedProductError("Please select a product");
    //   flag = false;
    // }
    if (ratingExperience === 0) {
      setRatingExperienceError("Please select a rating");
      flag = false;
    }
    if (ratingDurability === 0) {
      setRatingDurabilityError("Please select a rating");
      flag = false;
    }
    if (ratingVFM === 0) {
      setRatingVFMError("Please select a rating");
      flag = false;
    }
    if (ratingEfficiency === 0) {
      setRatingEfficiencyError("Please select a rating");
      flag = false;
    }
    if (ratingEaseOfUse === 0) {
      setRatingEaseOfUseError("Please select a rating");
      flag = false;
    }
    if (ratingOverall === 0) {
      setRatingOverallError("Please select a rating");
      flag = false;
    }

    if (flag) {
      // alert(`Name: ${name} \nProduct: ${productName}`);
      // get the User ID and user first name from the cookie
      const userId = Cookies.get("userid");
      const firstName = Cookies.get("firstname");

      // create a FormData object
      const formData = new FormData();
      formData.append("userid", userId);
      formData.append("username", firstName);
      formData.append("productname", productName);
      formData.append("productid", productId);
      formData.append("experience", ratingExperience);
      formData.append("durability", ratingDurability);
      formData.append("value_for_money", ratingVFM);
      formData.append("efficiency", ratingEfficiency);
      formData.append("ease_of_use", ratingEaseOfUse);
      formData.append("overall_rating", ratingOverall);
      if (suggestion !== "") {
        formData.append("suggestion", suggestion);
      }

      // send the form data to the server
      axios
        .post(`http://127.0.0.1:4000/user/submit-feedback`, formData)
        .then((res) => {
          if (res.status === 200) {
            alert(res.data.message);
            window.location.href = "/#/products";
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
    // alert(`Name: ${name}`)
  };

  // const nameOnChange = (e) => {
  //   setName(e.target.value);
  //   setNameError("");
  // };

  // const selectedProductOnChange = (e) => {
  //   setSelectedProduct(e.target.value);
  //   setSelectedProductError("");
  // };

  const ratingExperienceOnChange = (e) => {
    setRatingExperience(e.target.value);
    setRatingExperienceError("");
  };

  const ratingDurabilityOnChange = (e) => {
    setRatingDurability(e.target.value);
    setRatingDurabilityError("");
  };

  const ratingVFMOnChange = (e) => {
    setRatingVFM(e.target.value);
    setRatingVFMError("");
  };

  const ratingEfficiencyOnChange = (e) => {
    setRatingEfficiency(e.target.value);
    setRatingEfficiencyError("");
  };

  const ratingEaseOfUseOnChange = (e) => {
    setRatingEaseOfUse(e.target.value);
    setRatingEaseOfUseError("");
  };

  const ratingOverallOnChange = (e) => {
    setRatingOverall(e.target.value);
    setRatingOverallError("");
  };

  const ratings = {
    Experience: {
      id: "ratingExperience",
      error: ratingExperienceError,
      onClick: ratingExperienceOnChange,
    },
    Durability: {
      id: "ratingDurability",
      error: ratingDurabilityError,
      onClick: ratingDurabilityOnChange,
    },
    "Value for Money": {
      id: "ratingVFM",
      error: ratingVFMError,
      onClick: ratingVFMOnChange,
    },
    Efficiency: {
      id: "ratingEfficiency",
      error: ratingEfficiencyError,
      onClick: ratingEfficiencyOnChange,
    },
    "Ease of Use": {
      id: "ratingEaseOfUse",
      error: ratingEaseOfUseError,
      onClick: ratingEaseOfUseOnChange,
    },
    "Overall Rating": {
      id: "ratingOverall",
      error: ratingOverallError,
      onClick: ratingOverallOnChange,
    },
  };

  return (
    <div
      className="container-fluid justify-content-center align-items-center d-flex"
      style={{ minHeight: "95vh" }}
    >
      <div style={{ width: "100%" }}>
        <h1 className="text-center display-4 text-white my-5">
          Provide Feedback
        </h1>

        <div className="container-fluid" style={{ maxWidth: "800px" }}>
          <form className="w-100" noValidate onSubmit={handleSubmit}>
            {/* Name */}
            <div className="row my-4">
              <div className="col-md-2 col-12 text-start">
                <label for="name" className="col-form-label">
                  Name
                </label>
              </div>
              <div className="col-md-10 col-12 p-0">
                <input
                  style={{ textTransform: "capitalize" }}
                  type="text"
                  id="name"
                  name="name"
                  className="form-control placehoder-red"
                  value={name}
                  disabled
                  // placeholder="Enter the name"
                  // required
                  // onChange={nameOnChange}
                />
                <div
                  className="form-text text-end text-danger"
                  style={{ display: nameError ? "block" : "none" }}
                >
                  {nameError}
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="row my-4">
              <div className="col-md-2 col-12 text-start">
                <label for="products" className="col-form-label">
                  Product
                </label>
              </div>
              <div className="col-md-10 col-12 p-0">
                <input
                  type="text"
                  id="products"
                  name="products"
                  className="form-control"
                  value={productName}
                  disabled
                />
                {/*<select
                  className="form-select"
                  id="products"
                  name="products"
                  style={{ borderColor: selectedProductError ? "red" : "" }}
                  aria-label="Select Product"
                  onChange={selectedProductOnChange}
                >
                  <option selected disabled>
                    Select Product
                  </option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                  </select>*/}
                {/* <div
                  className="form-text text-end text-danger"
                  style={{ display: selectedProductError ? "block" : "none" }}
                >
                  {selectedProductError}
                </div> */}
              </div>
            </div>

            <div>
              {Object.entries(ratings).map(([title, rating]) => (
                <div className="row my-4" key={title}>
                  <div className="col-md-2 col-12 text-start">
                    <label htmlFor={rating.id} className="col-form-label">
                      {title}
                    </label>
                  </div>
                  <div className="col-md-10 col-12">
                    <div className="align-items-center row h-100 mx-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div
                          className="form-check form-check-inline col-1"
                          key={value}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name={rating.id}
                            id={`${rating.id}${value}`}
                            value={value}
                            onClick={rating.onClick}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`${rating.id}${value}`}
                          >
                            {value}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div
                      className="form-text text-end text-danger"
                      style={{ display: rating.error ? "block" : "none" }}
                    >
                      {rating.error}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Text area for Suggestion/Complaint */}
            <div className="row my-4">
              <div className="col-md-2 col-12 text-start">
                <label htmlFor="suggestion" className="col-form-label">
                  Suggestion/ Complaint
                </label>
              </div>
              <div className="col-md-10 col-12 p-0">
                <textarea
                  className="form-control"
                  id="suggestion"
                  name="suggestion"
                  rows="3"
                  placeholder="Enter any suggestion / complaint (optional)"
                  onChange={(e) => setSuggestion(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-md-2 col-12"></div>
              <div className="p-0 align-items-center col-md-10 col-12">
                <button className="btn btn-outline-warning w-50" type="submit">
                  Submit Feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
