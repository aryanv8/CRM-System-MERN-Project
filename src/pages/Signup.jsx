import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm'

function Signup() {

    //data=input field data
    const [data, setData] = useState([]); 

    const getState = (childData) =>{
        setData(childData);
    }

    const handleSubmit = () =>{
        //backend process to insert data

        const obj = { fname: data[0], lname: data[1], email: data[2],
                      pwd: data[3], phone: data[4], dob: data[5], 
                      gender: data[6], image: data[7], company: data[8],
                      job: data[9], address: data[10]
                    }
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