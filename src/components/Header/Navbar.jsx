import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import { parseJwt } from "../utils/parseJwt";
import "./Navbar.css";

const Navbar = () => {
  const [noti, setNoti] = useState([]);
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };

  const [user] = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-notifications`)
      .then((response) => {
        setNoti(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      {token?.userId && token?.user?.role === "user" ? (
        <>
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
              <div className="container-fluid col-md-10 col-14">
                <Link className="navbar-brand " to="/user-dashboard">
                  <span className="fs-1 fw-bold" style={{ color: "#7209b7" }}>
                    F
                  </span>
                  OREVER{" "}
                  <span className="fs-1 fw-bold" style={{ color: "#7209b7" }}>
                    Y
                  </span>
                  OUNG
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/about-us">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/solutions">
                        Solutions
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/medicare">
                      Skin Care
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      {token?.userId ? (
                        <Link className="nav-link header-link" to="/messages">
                          Messages
                        </Link>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="nav-item dropdown ">
                      <Link
                        className="nav-link dropdown-toggle  header-link"
                        to="/about-us"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Other
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <Link className="dropdown-item" to="/">
                          Blog
                        </Link>
                        <Link className="dropdown-item" to="/contact-us">
                          Contact Us
                        </Link>
                        <Link className="dropdown-item" to="/faq">
                          FAQ
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-2">
                    {token?.userId ? (
                      <>
                        <div className="flex-box d-flex flex-column">
                          <li
                            className="nav-item align-items-center fw-bold"
                            style={{ color: "#7209b7" }}
                          >
                            {user?.name}
                          </li>
                          <li
                            className="nav-item align-items-center fw-bold"
                            style={{ color: "#7209b7" }}
                          >
                            {user?.email}
                          </li>
                        </div>
                        <li className="nav-item">
                          <button
                            className="nav-link header-link btn btn-danger text-white"
                            onClick={(e) => handleLogout(e)}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link header-link" to="/login">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link header-link btn btn-primary text-white"
                            to="/register"
                          >
                            Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </>
      ) : token?.userId && token?.user?.role === "doctor" ? (
        <>
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
              <div className="container-fluid col-md-10 col-14">
                <Link className="navbar-brand " to="/doctor-dashboard">
                  <span className="fs-1 fw-bold" style={{ color: "#7209b7" }}>
                    F
                  </span>
                  OREVER{" "}
                  <span className="fs-1 fw-bold" style={{ color: "#7209b7" }}>
                    Y
                  </span>
                  OUNG
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/about-us">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/solutions">
                        Solutions
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/medicare">
                        Skin Care
                      </Link>
                    </li>

                    <li className="nav-item dropdown ">
                      <Link
                        className="nav-link dropdown-toggle  header-link"
                        to="/about-us"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Other
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <Link className="dropdown-item" to="/">
                          Blog
                        </Link>
                        <Link className="dropdown-item" to="/contact-us">
                          Contact Us
                        </Link>
                        <Link className="dropdown-item" to="/faq">
                          FAQ
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <li className="nav-item mx-3">
                    <Link
                      to="/all-notifications"
                      type="button"
                      className="nav-link header-link position-relative btn ps-2 pt-0 mx-3"
                    >
                      <i className="bi bi-bell fa-2x"></i>
                      <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill px-2 py-1 bg-dark">
                        {noti?.length}
                      </span>
                    </Link>
                  </li>
                  <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-2">
                    {token?.userId ? (
                      <>
                        <div className="flex-box d-flex flex-column">
                          <li
                            className="nav-item align-items-center fw-bold"
                            style={{ color: "#7209b7" }}
                          >
                            {user?.name}
                          </li>
                          <li
                            className="nav-item align-items-center fw-bold"
                             style={{ color: "#7209b7" }}
                          >
                            {user?.email}
                          </li>
                        </div>
                        <li className="nav-item">
                          <button
                            className="nav-link header-link btn btn-danger text-white"
                            onClick={(e) => handleLogout(e)}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link header-link" to="/login">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link header-link btn  text-white"
                            to="/register"
                            style={{backgroundColor: "#7209b7"}}
                          >

                            Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
              <div className="container-fluid col-md-10 col-14">
                <Link className="navbar-brand " to="/">
                  <span className="fs-1 fw-bold" style={{ color: "#7209b7" }}>
                    F
                  </span>
                  OREVER{" "}
                  <span className="fs-1 fw-bold" style={{ color: "#7209b7" }}>
                    Y
                  </span>
                  OUNG
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/about-us">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/solutions">
                        Solutions
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link header-link" to="/medicare">
                      Skin Care
                      </Link>
                    </li>
                    <li className="nav-item dropdown ">
                      <Link
                        className="nav-link dropdown-toggle  header-link"
                        to="/about-us"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Other
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <Link className="dropdown-item" to="/">
                          Blog
                        </Link>
                        <Link className="dropdown-item" to="/contact-us">
                          Contact Us
                        </Link>
                        <Link className="dropdown-item" to="/faq">
                          FAQ
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-2">
                    {token?.userId ? (
                      <>
                        <div className="flex-box d-flex flex-column">
                          <li
                            className="nav-item align-items-center fw-bold"
                            style={{ color: "#1a759f" }}
                          >
                            {user?.name}
                          </li>
                          <li
                            className="nav-item align-items-center fw-bold"
                            style={{ color: "#1a759f" }}
                          >
                            {user?.email}
                          </li>
                        </div>
                        <li className="nav-item">
                          <button
                            className="nav-link header-link btn btn-danger text-white"
                            onClick={(e) => handleLogout(e)}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link header-link" to="/login">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link header-link btn  text-white"
                            to="/register"
                            style={{backgroundColor: "#7209b7"}}
                          >
                            Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
