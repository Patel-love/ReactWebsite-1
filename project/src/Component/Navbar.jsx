import React from "react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand px-3" href="#">
            <img src={logo} style={{width: "70px"}} alt="" />
           
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item px-4">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link active" aria-current="page" href="#">
                  SERVICES
                </a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link active" aria-current="page" href="#">
                  BLOG
                </a>
              </li>
              <li class="nav-item px-5">
                <a class="nav-link active" aria-current="page" href="#">
                  CONTACT US
                </a>
              </li>
            
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
