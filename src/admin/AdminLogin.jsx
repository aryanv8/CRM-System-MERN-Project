import React,{useState} from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";

function AdminLogin(props) {
//email config
    const [data, setData] = useState([]); //data=input field data
    const[sec,setSec]=useState('');
    const getState = (childData) => {
        setData(childData);
    }
    const handleSubmit = () => {
        //backend
        if(sec !== '9080' || data[0] !== 'CRMadmin' || data[1] !== 'admin@CRM.123'){
            toast.error('Invalid login 🙃', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{
            Cookies.set("userid", "admin", { expires: 10 });
            alert("login success");
            window.location.href = "./#/dashboard";
        }
    }

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
            <div className="bg-dark-subtle border shadow container p-3 w-50 mb-4">
                <h5 className='border-bottom pb-2'>Default Credentials of admin for testing purposes</h5>
                <p>Username: CRMadmin</p>
                <p>Password: admin@CRM.123</p>
                <p>Security Pin: 9080</p>
            </div>

        <ToastContainer />
    </div>
  )
}

export default AdminLogin