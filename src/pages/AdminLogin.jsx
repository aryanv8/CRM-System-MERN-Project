import React from 'react';
import Login from '../components/Login';

function AdminLogin() {

  
    return (
    <div>
        <form>
            <Login 
            heading = "Admin" 
            forgetPassword = {<div className="ml-5 mt-3"><a href="#">Forgot Password</a></div>}

            securityPin = {
                        <div className="mb-3">
                            <label for="pin" className="form-label float-start">Security Pin</label>
                            <input type="password" className="form-control" id="pin" required/>
                        </div>
            }
            />

        </form>
    </div>
  )
}

export default AdminLogin