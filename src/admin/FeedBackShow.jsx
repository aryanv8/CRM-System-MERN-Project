import React, { useState, useEffect } from "react";
import "../styles/FeedBackDesign.css";
import { useParams, useLocation } from "react-router-dom";
import Axios from "axios";
import { ADMIN_SERVER } from "../constants";

function FeedBackShow() {
  const location = useLocation();
  const [resData, setResData] = useState([]);
  const [rec, setRec] = useState([]);

  const generateIcons = (rating, size = "fa-xs") => {
    // generate rating time this icon <i class="fa-solid fa-star"></i>
    let icons = [];
    for (let i = 0; i < rating; i++) {
      icons.push(<i className={`fa-solid fa-star text-warning ${size}`}></i>);
    }
    return icons;
  };

  useEffect(() => {
    //backend Axios using
    setRec(location.state.name);
    setSearch(location.state.name);

    Axios.get(`${ADMIN_SERVER}/feedback/all`)
      .then((res) => {
        if (res.status === 200) {
          setResData(res.data.feedbacks);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);
  const [search, setSearch] = useState("");

  return (
    <div className="container-fluid table-responsive-sm customers">
      <h2 className="mt-4 mb-4 display-5">Product's Feedback</h2>
      <span className="d-flex float-end">
        <label for="search">Search here:</label>
        <input
          className="me-2 form-control"
          type="search"
          defaultValue={rec}
          placeholder="Search..."
          aria-label="Search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      <div className="col-sm-5 col-md-6 col-12 pt-5 mx-auto">
        {resData &&
          resData
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (item.productid.includes(search)) {
                return item;
              } else if (
                item.productname.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              } else if (
                item.username.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((data) => (
              <div>
                <div
                  // style={{ borderRadius: "30px" }}
                  className="text-justify darkerfeed mt-4 nth border px-5 py-3 bg-dark-subtle rounded-4 shadow  text-white"
                >
                  <h4
                    id="pn"
                    className="text-warning fw-normal"
                    style={{ textAlign: "left" }}
                  >
                    {data.username}
                  </h4>
                  <div class="row border-bottom mb-2 p-1">
                    <div class="col-md-6 col-sm-12">
                      Product id:{" "}
                      <span className="fw-bold ms-2">{data.productid}</span>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      Product Name:{" "}
                      <span className="fw-bold ms-2">{data.productname}</span>
                    </div>
                  </div>
                  <div class="row">
                    <p class="col-md-3 col-sm-12">
                      value of money:{" "}
                      <span className="ps-1">
                        {generateIcons(data.value_for_money)}
                      </span>
                    </p>
                    <p class="col-md-3 col-sm-12">
                      easy of use:{" "}
                      <span className="ps-1">
                        {generateIcons(data.ease_of_use)}
                      </span>
                    </p>
                    <p class="col-md-3 col-sm-12">
                      experience:{" "}
                      <span className="ps-1">
                        {generateIcons(data.experience)}
                      </span>
                    </p>
                    <p class="col-md-3 col-sm-12">
                      durability:{" "}
                      <span className="ps-1">
                        {generateIcons(data.durability)}
                      </span>
                    </p>
                  </div>
                  <p className="fw-bold">
                    Over all Rating:{" "}
                    <span className="ps-1">
                      {generateIcons(data.overall_rating, "fa-sm")}
                    </span>
                  </p>
                  <p>{data.suggestions_or_compaints}</p>
                  <p className="text-secondary" style={{ textAlign: "right" }}>
                    {data.timestamp}
                  </p>
                </div>
                <br />
              </div>
            ))}
        {!resData && (
          <h4 className="text-danger display-6">No Feedbacks Are Available</h4>
        )}
      </div>
      <br />
      <br />
    </div>
  );
}

export default FeedBackShow;
