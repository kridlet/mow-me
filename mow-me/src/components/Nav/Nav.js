import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
  <a className="navbar-brand" >MowMe</a>
  
<<<<<<< HEAD
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <ul className="nav nav-tabs">

    <li className={window.location.pathname === "/" ? "active" : ""}>
    <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
    <Link to="/about">About</Link>
    </li>
    <li className={window.location.pathname === "/createjob" ? "active" : ""}>
    <Link to="/createjob">Create Job</Link>
    </li>
    <li className={window.location.pathname === "/jobboard" ? "active" : ""}>
    <Link to="/jobboard">Job Board</Link>
    </li>
    </ul>
      
=======
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" onClick={this.handleFormRegisterSubmit} href="">Log In</a>
      <a className="nav-item nav-link" href="">Register</a>
>>>>>>> master
    </div>
  </div>
  
  </nav>
  </div>
);

<<<<<<< HEAD


=======
>>>>>>> master
export default Nav;