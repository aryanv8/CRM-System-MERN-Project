import React,{ useState,useEffect } from 'react';
import CustomerTableRow from './CustomerTableRow';
import Axios from "axios";


function Customers() {
  
  //result data setting
  const [resData,setResData] = useState([]);

  useEffect(() => {
    //backend Axios using
    Axios.get("http://localhost:4000/user/all")
    .then((res)=>{
      if(res.status === 200){
        setResData(res.data)
      }
      else{
        Promise.reject();
      }
    })
    .catch((err)=>alert(err));
  }, [])
 console.log(resData);
 
 //showData function not working properly 
  const showData= () => {
    return resData.users.map((val,ind)=>{
      return <CustomerTableRow obj={val} key={ind} />
    })
  }

  return (
    <div className='container-fluid table-responsive-sm customers'>
      <h2 className='mt-3 mb-4'>Customer Details</h2>
      
      <div className="d-flex float-end m-3">
        <label for="search">Search here:</label>
        <input className="me-2 form-control" type="search" placeholder="Search..." aria-label="Search" id='search'/>
      </div>

      <table className='table mx-auto border shadow table-bordered table-dark table-hover rounded'
      style={{ borderRadius: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no</th>
            <th>Company</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
          {showData}
        </tbody>

      </table>
    </div>
  )
}

export default Customers