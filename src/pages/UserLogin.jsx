import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import Axios from "axios";
import Cookies from "js-cookie";
import md5 from "md5";
import { USER_SERVER } from "../constants";

function UserLogin() {
  const [data, setData] = useState([]); //data=input field data

  const getState = (childData) => {
    setData(childData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //backend
    console.log(data);
    const formData = new FormData();
    formData.append("email", data[0]);
    formData.append("password", md5(data[1]));
    Axios.post(`${USER_SERVER}/login`, formData)
      .then((res) => {
        if (res.status === 200) {
          alert("Login Successful");
          // make a cookie and store user details
          Cookies.set("userid", res.data.user._id, { expires: 10000 });
          Cookies.set("firstname", res.data.user.firstName, { expires: 10000 });

          window.location.href = "./#/profile";
        } else {
          alert(res.error);
        }
      })
      .catch((err) => {
        console.log("Error: ", err)
        alert("Invalid Credentials");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Login
          getState={getState}
          heading="User"
          forgetPassword={
            <div className="ml-5 mt-3">
              <Link to="/forgotpwd">Forgot Password</Link>
            </div>
          }
          signUp={
            <div className="ml-1">
              <Link to="/signup">New User</Link>
            </div>
          }
        />
      </form>
    </div>
  );
}

export default UserLogin;
