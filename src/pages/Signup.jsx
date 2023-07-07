import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm'
import Axios from 'axios'
import md5 from 'md5'

function Signup() {

    //data=input field data
    const [data, setData] = useState([]); 

    const getState = (childData) =>{
        setData(childData);
    }

    const handleSubmit = () =>{
        //backend process to insert data

        console.log(data);

        console.log(data[1]);
        console.log(data[0]);

        const formData = new FormData();
        formData.append("image", data[7]);
        formData.append("firstName", data[0]);
        formData.append("lastName", data[1]);
        formData.append("email", data[2]);
        formData.append("phone", data[4]);
        formData.append("dob", data[5]);
        formData.append("gender", data[6]);
        formData.append("company", data[8]);
        formData.append("jobTitle", data[9]);
        formData.append("country", data[10]);
        formData.append("address", data[11]);

        let password = data[3];
        password = md5(password);

        formData.append("password", password);

        console.log(formData.get("image"));
        
        Axios.post("http://127.0.0.1:4000/user/register", formData)
            .then((res) => {
                console.log(res);
                if (res.status === 200){
                    alert('Registration Successful')
                    // Navigate to login page
                    window.location.href = '/#/login'
                }
            })
            .catch((err) => alert(err))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <UserForm getState={getState} btnName='Create Account' heading='Registration Form' 
                login = {
                            <div className='mb-5 mt-3' id='login'>
                                <Link  to='/login' className='float-end'>Already have a account? Login</Link>
                            </div>
                        }
                
                terms = {
                            <div className="form-check mb-3">
                                <input type="checkbox" className="form-check-input" id="t&c" required />
                                <label className="form-check-label float-start" for="t&c">Terms & Conditions</label>
                            </div>
                        }
                />
            </form>
        </div>
    )
}

export default Signup