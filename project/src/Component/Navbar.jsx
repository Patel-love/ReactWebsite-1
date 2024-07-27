import React from "react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-secondary-subtle "
        data-bs-theme="dark"
      >
        <div class="container">
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
                 <b> HOME</b>
                </a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link active" aria-current="page" href="#">
                 <b> ABOUT </b>
                </a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link active" aria-current="page" href="#">
                 <b> SERVICES </b>
                </a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link active" aria-current="page" href="#">
                 <b> BLOG </b>
                </a>
              </li>
              <li class="nav-item px-5">
                <a class="nav-link active" aria-current="page" href="#">
                 <b> CONTACT US </b>
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
             <button type="button" class="btn btn-outline-secondary">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
