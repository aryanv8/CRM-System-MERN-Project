import React, { useState, useEffect } from "react";
import "../styles/FeedBackDesign.css";
import { useParams, useLocation } from "react-router-dom";
import Axios from "axios";
import { ADMIN_SERVER } from "../constants";

function FeedBackShow() {
  const location = useLocation();
  const [resData, setResData] = useState([]);
  const [rec, setRec] = useState([]);


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
    <div className="container-fluid table-responsive-sm customers" style={{minHeight: '80vh'}}>
      <h2
        style={{ textAlign: "center" }}
        className="mt-4 mb-5 text-center text-white display-4"
      >
        Feedback Page
      </h2>
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
      <div className="col-sm-5 col-md-6 col-12 pb-4 mx-auto">
        {resData && resData
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
                className="text-justify darkerfeed mt-4 nth text-white shadow bg-dark-subtle px-5 py-4 border rounded"
              >
                <h4 id="pn" className="text-warning" style={{ textAlign: "left" }}>
                  {data.username}
                </h4>
                <div class="row border-bottom p-2 mb-2 align-items-center">
                  <div class="col-md-6 col-sm-12 fw-bold">Product id:{data.productid}</div>
                  <div class="col-md-6 col-sm-12 fw-bold">
                    Product Name:{data.productname}
                  </div>
                </div>
                <div class="row">
                  <p class="col-md-3 col-sm-12">
                    value of money:{data.value_for_money}
                  </p>
                  <p class="col-md-3 col-sm-12">
                    easy of use:{data.ease_of_use}
                  </p>
                  <p class="col-md-3 col-sm-12">experience:{data.experience}</p>
                  <p class="col-md-3 col-sm-12">durability:{data.durability}</p>
                </div>
                <p className="fs-5">Over all Rating: {data.overall_rating}</p>
                <p>{data.suggestions_or_compaints}</p>
                <p className="text-secondary" style={{ textAlign: "right" }}>{data.timestamp}</p>
              </div>
              <br />
            </div>
          ))}
        {!resData && <h4 className="text-danger display-6">No Feedbacks Are Available</h4>}
      </div>
      <br />
      <br />
    </div>
  );
}

export default FeedBackShow;
