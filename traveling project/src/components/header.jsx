import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    return (
        <header className="py-3 bg-pro header">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="he-logo">
                  <NavLink to="/">
                    <h1 className="m-0">Traveller</h1>
                  </NavLink>
              </div>
              <div className="col d-none d-lg-block pe-0 index-nav">
                <nav>
                  <ul className="nav justify-content-end py-2">
                    <li className="fw-semibold px-3 fs-6 dropdown-list position-relative h-home">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="fw-semibold px-3 fs-6 dropdown-list position-relative h-features">
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="fw-semibold px-3 fs-6 dropdown-list position-relative h-features">
                      <NavLink to="/booking">Booking</NavLink>
                    </li>
                    <li className="fw-semibold px-3 fs-6 dropdown-list position-relative h-plans">
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-1 d-flex flex-wrap justify-content-end align-items-center d-lg-none">
                <button>
                  <i className="bi bi-list fw-bold fs-4 text-dark"></i>
                </button>
              </div>
              <div className="col-2">
                <a href="#" className="btn text-white btn-primary py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Book Now
                </a>
              </div>
            </div>
          </div>
        </header>
    )
  };
  
  export default Header;
  