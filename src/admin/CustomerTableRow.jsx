import React from 'react'
import { Link } from 'react-router-dom';

function CustomerTableRow(props) {
    //Object Destruction
    const {_id, firstName, lastName, email, phone, dob, gender, image, company, jobTitle, country, address, password} = props.obj;
    
    //Deleting user details in backend
    const handleDelete = () =>{
        //backend process
        alert("sure want to delete");
    }

    return (
        <tr>
            <td>{firstName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{company}</td>
            <td>{country}</td>
            <td>
                <Link to='../profile' className='btn btn-warning'><i class="fa-solid fa-eye"></i> View</Link>{" "}
                <button className='btn btn-danger' onClick={handleDelete}><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i> Delete</button>
            </td>
        </tr>

    )
}

export default CustomerTableRow