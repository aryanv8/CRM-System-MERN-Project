import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import Axios from "axios";
import Cookies from "js-cookie";
import md5 from "md5";

function UserLogin() {
  const [data, setData] = useState([]); //data=input field data

  const getState = (childData) => {
    setData(childData);
  };
  const handleSubmit = () => {
    //backend
    console.log(data);
    const formData = new FormData();
    formData.append("email", data[0]);
    formData.append("password", md5(data[1]));
    Axios.post("http://localhost:4000/user/login", formData)
      .then((res) => {
        if (res.status === 200) {
          alert("Login Successful");
          // make a cookie and store user details
          Cookies.set("userid", res.data.user._id, { expires: 10 });

          window.location.href = "./#/profile";
        } else {
          alert(res.error);
        }
      })
      .catch((err) => console.log(err));
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
