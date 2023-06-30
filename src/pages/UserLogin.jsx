import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

function UserLogin() {
  return (
    <div>
        <Login heading="User" 
        forgetPassword = {<div className="ml-5 mt-3"><a href="#">Forgot Password</a></div>}
        signUp = {<div className='ml-1'><Link to="/signup">New User</Link></div>}
        />
    </div>
  )
}

export default UserLogin