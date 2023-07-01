import React,{useState} from 'react';
function Forgotpwd(){
const[mail,setMail]=useState('');
const handleClick=()=>{
    //backend
    alert(mail);
}
    return( <div className='container-fluid login'>
    <form className='container bg-dark'>
        <h2>Forgot Password</h2>
        <div className="mb-3 mt-4">
            <label for="mail" className="form-label float-start">Email</label>
            <input type="mail" className="form-control"  id="mail" placeholder="Enter your mail id" onChange={(e) => setMail(e.target.value)} title="enter registered mail id" required />
        </div>
        <div>
        <button type='submit' className='btn btn-outline-warning w-50 mt-4' value='Submit' onClick={handleClick}>Reset</button>
        </div>
        </form>
        </div>);
}
export default Forgotpwd;