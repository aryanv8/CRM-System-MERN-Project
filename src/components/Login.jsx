import React,{useState} from 'react';
import '../styles/Login.css';

function Login(props){
    var[uname, setName] = useState('');
    var [pwd, setPwd] = useState('');
    var[sec,setSec]=useState('');
    const data=[uname,pwd,sec];
    const handleClick = () => {
        setSec(props.sec);
        return props.getState(data);
    }
    return(
        <div className='container-fluid login'>
            <div className='container bg-dark'>
                <h2>{props.heading} Login</h2>
                <div className="mb-3 mt-4">
                    <label for="uname" className="form-label float-start">User Name</label>
                    <input type="text" className="form-control" id="uname" placeholder="Enter your User Name" onChange={(e) => setName(e.target.value)} title="enter user name" required />
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label float-start">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter Password" onChange={(e) => setPwd(e.target.value)} title="enter password" required/>
                </div>

                {props.securityPin}

                <button className='btn btn-outline-warning w-50 mt-4' value='Submit' onClick={handleClick}>Login</button>
                
                {props.forgetPassword}
                {props.signUp}
                
                
            </div>
        </div>
    
    );
}
export default Login;