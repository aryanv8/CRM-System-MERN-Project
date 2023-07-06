import React,{useState} from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
function AdminLogin(props) {
//email config
    const [data, setData] = useState([]); //data=input field data
const[sec,setSec]=useState('');
    const getState = (childData) => {
        setData(childData);
    }
    const handleSubmit = () => {
        //backend
        alert("submit");}

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <Login getState={getState}
            heading = "Admin" 
            forgetPassword = {<div className="ml-5 mt-3"><Link to="/forgotpwd">Forgot Password</Link></div>}
            securityPin = {
                        <div className="mb-3">
                            <label for="pin" className="form-label float-start">Security Pin</label>
                            <input type="password" className="form-control" id="pin" onChange={(e) => setSec(e.target.value)} required/>
                        </div>
            }
            sec={sec}
            />

        </form>
    </div>
  )
}

export default AdminLogin