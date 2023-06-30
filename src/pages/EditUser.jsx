import React, {useState} from 'react';


import UserForm from '../components/UserForm';

function EditUser() {
    //setting with already saved values 
    const [obj,setObj] = useState({});
    //setting updated values
    const [updatedData, setUpdatedData] = useState([]);

    //getting id of particular user form url
    // const {id} = useParams();

    const getState = (childData) => {
        setUpdatedData(childData);
    }

    const handleSubmit = () => {
        const updatedObj = { fname: updatedData[0], lname:updatedData[1], email:updatedData[2],
            pwd:updatedData[3], phone:updatedData[4], dob:updatedData[5], 
            gender:updatedData[6], image:updatedData[7], company:updatedData[8],
            job:updatedData[9], address:updatedData[10]
          }

          //backend process
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <UserForm getState={getState} btnName='Update' heading='Update Profile' 
                fnameValue={obj.fname} lnameValue = {obj.lname} emailValue = {obj.email}
                pwdValue = {obj.email} phoneValue = {obj.phone} dobValue = {obj.dob}
                companyValue = {obj.company} jobValue = {obj.job} countryValue = {obj.company}
                addressValue = {obj.address}
            />
        </form>
    </div>
  )
}

export default EditUser