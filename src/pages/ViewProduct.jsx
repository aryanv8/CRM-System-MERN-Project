import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cokies from "js-cookie";
function ViewProduct() {
  const [data, setData] = useState([]);
const[redire,setRed]=useState(false);
  useEffect(() => {
    if(auth==="admin")
setRed(true);
    const url = "https://dummyjson.com/products";
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          console.log(res); 
          setData(res.data.products);
          console.log(data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const auth = Cokies.get('userid');

  return (
    <div className="row container-fluid mx-auto">
      <h1 className="mt-3 mb-5">Product details</h1>
      {data.map((data) => (
        <div className="col-md-4 col-sm-12">
          <div
            className="card bg-dark border text-center shadow mx-auto m-4"
            style={{ width: "24rem", height: "35rem" }}
          >
            <img
              src={data.images[0]}
              className="card-img-top"
              style={{ height: "20rem" }}
              alt={data.title}
            />
            <div className="card-body">
              <h5 className="card-title text-light">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <div className="row card-text">
                <span className="col-6 card-text text-warning">
                  Brand: {data.brand}
                </span>
                <span className="col-6 card-text text-warning">
                  Price: ${data.price}
                </span>
              </div>
            </div>
            <div className="card-footer bg-dark border-0 border-end">
              <button className="btn btn-outline-warning w-100 mb-1 col">
              { (redire)?<Link
                  to={"/feedbackshow"}
                  state={{ name: data.title, id: data.id }}
                  className="nav-link"
                >
                  View Feedback
                </Link>:  <Link
                  to={"/feedback"}
                  state={{ name: data.title, id: data.id }}
                  className="nav-link"
                >
                  Feedback
                </Link>}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewProduct;
