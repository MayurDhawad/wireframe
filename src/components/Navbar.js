import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const auth = useAuth();
  let navigate = useNavigate("");

  const logout = () =>{
    navigate("/login");
    auth.logout()
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-uppercase" to="/">
          Assignment
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              {!auth.user && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!auth.user && (
                <Link className="nav-link" to="/registration">
                  Registration
                </Link>
              )}
            </li>
            <li className="nav-item">
              {auth.user && (
                <Link className="nav-link" onClick={logout}>
                  Logout
                </Link>
              )}
            </li>
            <li className="nav-item">
              {auth.user && (
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
