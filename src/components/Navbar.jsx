import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
<<<<<<< HEAD

  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(()=>{
      setExpandNavbar(false);
  }, [location])
    
=======
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

>>>>>>> ce09aaf538c6b88d7e0f2a7201ecb166a935d91e
  return (
    <div
      class="navbar navbar-dark navbar-expand-md py-3 px-3 sticky-top"
      id={expandNavbar ? "open" : "close"}
      style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
    >
      <Link to="/" className="navbar-brand h1">
        {" "}
        <i
          class="fa-solid fa-users-gear fa-xl"
          style={{ color: "#f0f2f5;" }}
        ></i>{" "}
        CRM-System
      </Link>

      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
      >
        <span class="navbar-toggler-icon"></span>
      </button>

<<<<<<< HEAD
        <div class="navbar-collapse collapse mr-0 " id="navbar" style={{justifyContent: 'flex-end'}}>
            <div className='navbar-nav'>
              <Link to='/about' className='nav-link mx-3'>About</Link>
              <Link to='/contact' className='nav-link mx-3'>Contact</Link>
              <Link to='/login' className=' nav-link mx-3'>Login</Link> 
              <Link to='/signup' className='nav-link mx-3'>Sign-Up</Link> 
            </div>
=======
      <div
        class="navbar-collapse collapse mr-0 "
        id="navbar"
        style={{ justifyContent: "flex-end" }}
      >
        <div className="navbar-nav">
          <Link to="/" className="nav-link mx-3">
            Home
          </Link>
          <Link to="/Projects" className="nav-link mx-3">
            Projects
          </Link>
          <Link to="/login" className=" nav-link mx-3">
            Login
          </Link>
          <Link to="/signup" className="nav-link mx-3">
            Sign-Up
          </Link>
>>>>>>> ce09aaf538c6b88d7e0f2a7201ecb166a935d91e
        </div>
      </div>
    </div>
  );
}

export default Navbar;
