import React,{ useState,useEffect } from 'react';
import CustomerTableRow from './CustomerTableRow'


function Customers() {
  
  //result data setting
  const [resData,setResData] = useState([]);

  useEffect(() => {
    //backend Axios using
  }, [])
  
  
  const tableData = () =>{
    // return resData.map((val,ind)=>{
    //   return <CustomerTableRow obj={val} key={ind} />
    // })
    return <CustomerTableRow />
  }

  return (
    <div className='container-fluid table-responsive-sm customers'>
      <h2 className='mt-3 mb-4'>Customer Details</h2>
      
      <div className="d-flex float-end m-3">
        <label for="search">Search here:</label>
        <input className="me-2 form-control" type="search" placeholder="Search..." aria-label="Search" id='search'/>
      </div>

      <table className='table table-bordered mx-auto border-light table table-striped'>
        <thead className='table-dark border-light'>
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
          {tableData()}
        </tbody>

      </table>
    </div>
  )
}

export default Customers