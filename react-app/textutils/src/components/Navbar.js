import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{height:"30px",width:"30px"}}
            onClick={()=>{props.toggleMode('primary')}}></div>
            <div className="bg-danger rounded mx-2" style={{height:"30px",width:"30px"}}
            onClick={()=>{props.toggleMode('danger')}}></div>
            <div className="bg-success rounded mx-2" style={{height:"30px",width:"30px"}}
            onClick={()=>{props.toggleMode('success')}}></div>
            <div className="bg-warning rounded mx-2" style={{height:"30px",width:"30px"}}
            onClick={()=>{props.toggleMode('warning')}}></div>
          </div>
          <div
            className={`form-check form-switch mx-2 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={()=>{props.toggleMode(null)}}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// here we define the types of props

Navbar.propTypes = {
  title: PropTypes.string,
};

// here we define the props default values

Navbar.defaultProps = {
  title: "Set Title here",
  about: "About",
};
