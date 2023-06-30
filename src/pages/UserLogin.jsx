import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

function UserLogin() {
  const [data, setData] = useState([]); //data=input field data

    const getState = (childData) => {
        setData(childData);

    }
    const handleSubmit = () => {
      //backend
      alert("submit");}

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <Login getState={getState} heading="User" 
        forgetPassword = {<div className="ml-5 mt-3"><a href="#">Forgot Password</a></div>}
        signUp = {<div className='ml-1'><Link to="/signup">New User</Link></div>}
        />
        </form>
    </div>
  )
}

export default UserLogin