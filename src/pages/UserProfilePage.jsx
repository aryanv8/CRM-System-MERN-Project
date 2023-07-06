import React, { useEffect, useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function UserProfilePage() {
  const [user, setUser] = useState({});
  const [retrieved, setRetrieved] = useState(false);
  // eslint-disable-next-line
  const [uid, setUid] = useState(null);

  const SERVER_URL_USER = "http://localhost:4000/user";
  

  const user1 = {
    _id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phone: "9876543210",
    dob: "1990-01-01",
    gender: "male",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    company: "ABC",
    jobTitle: "Developer",
    country: "India",
    address: "Mumbai",
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const uid = await Cookies.get("userid");
        setUid(uid);
        const response = await Axios.get(
          `${SERVER_URL_USER}/profile?id=${uid}`
        );
        setUser(response.data.user);
        setRetrieved(true);
      } catch (error) {
        console.log(error);
        setUser(user1);
      }
    }

    fetchData();
    
  },[]);

  return (
    <div>
      <div className="container mx-auto my-5">
        <h1 className="text-center display-4 my-5 text-white">Profile</h1>
        <div className="text-center my-4">
          <img
            src={retrieved?`${SERVER_URL_USER}/image/${user.image}`: user.image}
            alt="User Avatar"
            className="rounded-circle"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <div
          className="justify-content-center border text-start shadow mt-5 mb-3 p-4 bg-dark-subtle mx-auto"
          style={{ maxWidth: "600px", borderRadius: "10px" }}
        >
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>First Name:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.firstName}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Last Name:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.lastName}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Email:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.email}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Phone:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.phone}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Date of Birth:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.dob}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Gender:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.gender}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Company:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.company}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Job Title:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.jobTitle}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Country:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.country}</div>
          </div>
          <div className="row m-3 fs-5">
            <div className="col-12 col-sm-6">
              <strong>Address:</strong>
            </div>
            <div className="col-12 col-sm-6">{user.address}</div>
          </div>
        </div>

        <Link to={`/edit-user`} state= {{user: user}}>
          <button className="btn btn-warning px-4">
            <i class="fa-solid fa-pencil fa-lg me-3"></i> Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserProfilePage;
