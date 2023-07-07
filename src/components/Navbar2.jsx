import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cokies from "js-cookie";

function Navbar2() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      setExpandNavbar(false);
    }, [location]);
  
    const auth = Cokies.get('userid');
    const handleLogout = () => {
        Cokies.remove("userid");
        Cokies.remove("firstname");
        window.location.href = "/";
      };

    if(auth === "admin"){
      return(
      <div
        class="navbar navbar-dark navbar-expand-md py-3 px-3 sticky-top"
        id={expandNavbar ? "open" : "close"}
        style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
      >
        <Link to="./dashboard" className="navbar-brand h1">
          {" "}<i class="fa-solid fa-users-gear fa-xl" style={{ color: "#f0f2f5;" }}></i>{" "}
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

        <div class="navbar-collapse collapse mr-0 " id="navbar" style={{ justifyContent: "flex-end" }}>
          <button className="btn btn-outline-light mx-3" onClick={handleLogout}>
            Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
      )
    }
    else{  
      return (
      <div
        class="navbar navbar-dark navbar-expand-md py-3 px-3 sticky-top"
        id={expandNavbar ? "open" : "close"}
        style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
      >
        <Link to="/" className="navbar-brand h1">
          {" "}<i class="fa-solid fa-users-gear fa-xl" style={{ color: "#f0f2f5;" }}></i>{" "}
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

        <div class="navbar-collapse collapse mr-0 " id="navbar" style={{ justifyContent: "flex-end" }}>
          
          {/* default links */}
          <div className="navbar-nav">
              <Link to="/about" className="nav-link mx-3">About</Link>
              <Link to="/contact" className="nav-link mx-3">Contact</Link>
          </div>
            
          {
              auth ? 
              //logged in part
              <div className="navbar-nav">
                  <Link to='/products' className="nav-link mx-3">Products</Link>
                  <Link to='/profile' className="nav-link mx-3">{Cokies.get('firstname')}</Link>
                  <button className="btn btn-outline-light mx-3" onClick={handleLogout}>
                      Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
              </div>

              :

              // not logged in part
              <div className="navbar-nav">
                  <Link to='/login' className="nav-link mx-3">Login</Link>
                  <Link to='/signup' className="nav-link mx-3">Signup</Link>
              </div>
          }
        </div>
      </div>
    )
    }
}

export default Navbar2