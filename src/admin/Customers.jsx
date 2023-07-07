import React,{ useState,useEffect } from 'react';
import Axios from "axios";
import { USER_SERVER } from "../constants";
import { Link } from "react-router-dom";


function Customers() {
  
  //result data setting
  const [resData,setResData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //backend Axios using
    Axios.get("http://127.0.0.1:4000/user/all")
    .then((res)=>{
      if(res.status === 200){
        setResData(res.data.users)
      }
      else{
        Promise.reject();
      }
    })
    .catch((err)=>alert(err));
  }, [])
//  console.log(resData);
 
 //showData function not working properly 
  // const showData= () => {
  //   return resData.users.map((val,ind)=>{
  //     return <CustomerTableRow obj={val} key={ind} />
  //   })
  // }
  
  const handleDelete = (id) =>{
    //backend process
    alert("sure want to delete")
    Axios.delete("http://127.0.0.1:4000/user/delete/"+id)
    .then((res) => {
        console.log(res);
        if (res.status === 200){
            alert('deleted Successful')
            window.location.reload();
        }
        else{
          alert("error");
        }
    })
    .catch((err) => alert(err))
  }

 


  return (
    <div className='container-fluid table-responsive-sm customers'>
      <h2 className='mt-3 mb-4'>Customer Details</h2>
      
      <div className="d-flex float-end m-3">
        <label for="search">Search here:</label>
        <input className="me-2 form-control" type="search" placeholder="Search..." aria-label="Search" id='search' onChange={(e) => setSearch(e.target.value)}/>
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
          {
          
          resData.filter((item)=>{
            if(search == ""){
              return item
            }
            else if(item.firstName.toLowerCase().includes(search.toLowerCase())){
              return item
            }
            else if(item.email.toLowerCase().includes(search.toLowerCase())){
              return item
            }
            else if(item.phone.includes(search)){
              return item
            }
            else if(item.company.toLowerCase().includes(search.toLowerCase())){
              return item
            }
            else if(item.country.toLowerCase().includes(search.toLowerCase())){
              return item
            }
          })
          .map((data) => (
          <tr>
            
              <td>{data.firstName+ " "+ data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.company}</td>
              <td>{data.country}</td>
              <td>
                  <button className='btn btn-warning'>
                  <Link
                  to={"/view-profile"}
                  state={data}
                  className="nav-link"
                >
                 <i class="fa-solid fa-eye"></i> View
                </Link>
                    </button>{" "}
                  <button className='btn btn-danger' onClick={()=>{handleDelete(data._id)}}><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i> Delete</button>
              </td>
          </tr>
          ))
          }
        </tbody>

      </table>
    </div>
  )
}

export default Customers