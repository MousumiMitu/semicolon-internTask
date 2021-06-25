import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light container">
        <div class="container-fluid">
          <a class="nav-link-item" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link-item active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link-item" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link-item" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link-item" href="#">
                  pages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link-item" href="#">
                  News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link-item" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="primary-btn" type="submit">
                Get a quote
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
