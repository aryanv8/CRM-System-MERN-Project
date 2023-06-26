import React from 'react';
import '../styles/Signup.css';

function Signup() {

    function validateFileType(){
        var fileName = document.getElementById("image").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile==="jpg" || extFile==="jpeg" || extFile==="png"){
            //TO DO
        }else{
            alert("Only jpg/jpeg or png files are allowed!");
            document.getElementById("image").value="";
        }   
    }

  return (
    <div className='container-fluid signup' >
        <form className='container bg-dark was-validated'>
            <h3 className='mt-10'>Registration Form</h3>

            <div className="mb-3">
                <label for="fname" className="form-label float-start">First Name</label>
                <input type="text" className="form-control" id="fname" placeholder="Enter your First Name" required />
            </div>
            
            <div className="mb-3">
                <label for="lname" className="form-label float-start">Last Name</label>
                <input type="text" className="form-control" id="lname" placeholder="Enter your Last Name" required />
            </div>

            <div className="mb-3">
                <label for="email" className="form-label float-start">Email</label>
                <input type="text" className="form-control" id="email" placeholder="Enter your Email" required />
            </div>

            <div className="mb-3">
                <label for="phone" className="form-label float-start">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your Phone no" maxLength={10} required />
            </div>

            <div className="mb-3">
                <label for="dob" className="form-label float-start">Date of Birth</label>
                <input type="date" className="form-control" id="dob" placeholder="DOB" required />
            </div>

            <div className="mb-3">
                <label className="form-label float-start">Gender:</label>
                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" id="male" name="radio-stacked" required />
                    <label className="form-check-label mx-2" for="male"> Male</label>
                </div>
                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" id="female" name="radio-stacked" required />
                    <label className="form-check-label mx-2" for="female"> Female</label>
                </div>
                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" id="others" name="radio-stacked" required />
                    <label className="form-check-label mx-2" for="others">Others</label>
                </div>
            </div>

            <div className="mb-3">
                <label for="image" className="form-label float-start">Upload image</label>
                <input type="file" accept="image/*" className="form-control" id="image" placeholder="Enter your First Name" onChange={validateFileType} required />
            </div>

            <div className="mb-3">
                <label for="company" className="form-label float-start">Company</label>
                <input type="text" className="form-control" id="company" placeholder="Enter your Company Name" required />
            </div>

            <div className="mb-3">
                <label for="job" className="form-label float-start">Job Title</label>
                <select className="form-select" aria-label="Default select example" id="title" required>
                    <option disabled="" label="Job Title" selected="" value="">Job Title</option>
                    <option value="Sales_Manager_AP">Sales Manager</option>
                    <option value="Marketing_PR_Manager_AP">Marketing / PR Manager</option>
                    <option value="Customer_Service_Manager_AP">Customer Service Manager</option>
                    <option value="CxO_General_Manager_AP">CxO / General Manager</option>
                    <option value="IT_Manager_AP">IT Manager</option>
                    <option value="Operations_Manager_AP">Operations Manager</option>
                    <option value="Developer">Developer / Software Engineer / Analyst</option>
                    <option value="Student / Personal Interest">Student / Personal Interest</option>
                    <option value="Others_AP">Others</option>
                </select>
            </div>

            <div className="mb-3">
                <label for="country" className="form-label float-start">Country/Region</label>
                <select className="form-select" aria-label="Default select example" id="country" required >
                    <option selected="" disabled="" value="">Choose your Region</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Beligium">Belgium</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="HongKong">Hong Kong</option>
                    <option value="Colombia">Colombia</option>
                    <option value="France">France</option> 
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israle">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>     
                    <option value="US">United States</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>    
                </select>
            </div>

            <div className="mb-3">
                <label for="address" className="form-label float-start">Address</label>
                <textarea className="form-control" id="address" placeholder="Provide your Address" required ></textarea>
            </div>

            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="t&c" required />
                <label className="form-check-label float-start" for="t&c">Terms & Conditions</label>
                {/* <span className="invalid-feedback float-end">Before Submit Accept it</span> */}
            </div>

            <div className='my-10 '>
                <button type='submit' className='btn btn-primary' value='Submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Signup