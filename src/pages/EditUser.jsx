import React, { useEffect, useState } from "react";

import UserForm from "../components/UserForm";

import { useLocation } from "react-router-dom";
import md5 from "md5";

import Axios from "axios";
import Cokies from "js-cookie";
function EditUser() {
  const location = useLocation();

  //setting with already saved values
  const [obj, setObj] = useState({});
  //setting updated values
  const [updatedData, setUpdatedData] = useState([]);

  //getting id of particular user form url
  // const {id} = useParams();

  const getState = (childData) => {
    setUpdatedData(childData);
  };

  const handleSubmit = () => {
    //backend process to update data

    console.log("updated data: ", updatedData);

    const formData = new FormData();
    if (updatedData[7]) {
      formData.append("image", updatedData[7]);
    }
    formData.append("firstName", updatedData[0]);
    formData.append("lastName", updatedData[1]);
    formData.append("email", updatedData[2]);
    formData.append("phone", updatedData[4]);
    formData.append("dob", updatedData[5]);
    formData.append("gender", updatedData[6]);
    formData.append("company", updatedData[8]);
    formData.append("jobTitle", updatedData[9]);
    formData.append("country", updatedData[10]);
    formData.append("address", updatedData[11]);
    formData.append("_id", obj._id);

    if (updatedData[3] !== "") {
      let password = updatedData[3];
      password = md5(password);

      formData.append("password", password);
    } else {
      formData.append("password", "");
    }
    console.log("Form Data: ", formData.get("image"));
    //backend process
    Axios.post("http://localhost:4000/user/update", formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Profile Updated Successfully");
          // Navigate to login page
          const auth = Cokies.get('userid');
          if(auth === "admin"){
            window.location.href="./#/customers"
          }
          else{
window.location.href="./#/profile";
          }
        }
      })
      .catch((err) => {
        alert(err);

        // navigate back in history
        window.history.back();
      });
  };

  const [date, setDate] = useState("");

  useEffect(() => {
    try {
        setObj(location.state?.user ?? { name: "Default User" });
        console.log("User passed: ", location.state.user);
        setDate(new Date(location.state.user.dob).toISOString().substring(0, 10));
    }catch(err){
      console.log(err);
    }
    console.log(obj);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserForm
          getState={getState}
          btnName="Update"
          heading="Update Profile"
          fnameValue={obj.firstName}
          lnameValue={obj.lastName}
          emailValue={obj.email}
          phoneValue={obj.phone}
          dobValue={date}
          companyValue={obj.company}
          jobValue={obj.jobTitle}
          countryValue={obj.country}
          addressValue={obj.address}
          imgRequirement={false}
          passwordRequirement={false}
          passwordPlaceholder="Enter new password, if you want to change it"
          imgLabel="Change Profile Picture (Optional)"
          genderValue={obj.gender}
        />
      </form>
    </div>
  );
}

export default EditUser;
