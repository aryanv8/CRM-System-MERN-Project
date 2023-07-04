import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div
      class="navbar navbar-dark navbar-expand-md py-3 px-3 sticky-top"
      id={expandNavbar ? "open" : "close"}
      style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
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

      <div
        class="navbar-collapse collapse mr-0 "
        id="navbar"
        style={{ justifyContent: "flex-end" }}
      >
        <div className="navbar-nav">
          <Link to="/about" className="nav-link mx-3">
            About
          </Link>
          <Link to="/contact" className="nav-link mx-3">
            Contact
          </Link>
          <Link to="/feedback" className="nav-link mx-3">
            Feedback
          </Link>
          <Link to="/login" className=" nav-link mx-3">
            Login
          </Link>
          <Link to="/signup" className="nav-link mx-3">
            Sign-Up
          </Link>
          {/* Link to /profile named Profile */}
          <Link to="/profile" className="nav-link mx-3">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
