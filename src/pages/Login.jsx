import React from 'react';
import '../styles/Login.css';
function Login(){
    return(
        <div className='container-fluid login'>
        <form className='container bg-dark was-validated'>
        <h2>CRM Login</h2>
            <div className="mb-3 mt-4">
                <label for="uname" className="form-label float-start">User Name</label>
                <input type="text" className="form-control" id="uname" placeholder="Enter your User Name" title="enter user name" required />
            </div>
            <div className="mb-3">
                <label for="pwd" className="form-label float-start">Password</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter Password" title="enter password" required/>
            </div>
            <button type='submit' className='btn btn-outline-warning w-50 mt-4' value='Submit'>Login</button>
            <div className="ml-5"><h1></h1><a href="#">Forgot password</a></div>
            </form>
            </div>
    
    );
}
export default Login;