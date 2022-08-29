import React from "react";
// import { useState } from "react";
import {Link} from "react-router-dom"

const Nav=()=>{

  function Login(){}

    return(
        <>
         <nav className="navbar sticky-top navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Shopping Mall</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/Clothes">Clothes</Link></li>
                  <li><Link className="dropdown-item" to="/Shoes">Shoes</Link></li>
                  <li><Link className="dropdown-item" to="/Bags"> Bags</Link></li>
                  <li><Link className="dropdown-item" to="/Watch"> Watch</Link></li>
                  <li><Link className="dropdown-item" to="/Books"> Book</Link></li>
                  <li><Link className="dropdown-item" to="/Food"> Foods</Link></li>
                  <li><Link className="dropdown-item" to="/Cosmetic"> Cosmetics</Link></li>
                  <li><Link className="dropdown-item" to="/Utensils"> Utensils</Link></li>
                  <li><Link className="dropdown-item" to="/Furniture"> Furniture</Link></li>
                  <li><Link className="dropdown-item" to="/Electrical"> Electric Appliances</Link></li>  
                </ul>
              </li>
              <li className="nav-item">
 <li><Link className="nav-link active" aria-current="page" to="/About">About Us</Link></li>
 </li>

              <li className="nav-item">
 <li><Link className="nav-link active" aria-current="page" to="/Login">Log in</Link></li>
 </li>
            </ul>
            <nav className="navbar  ">
<div className="input-group">
  <span className="input-group-text" ><i class="fa-solid fa-magnifying-glass"></i></span>
  <input type="text" className="form-control"id="form-control1" placeholder=" Search" aria-label="Username" aria-describedby="basic-addon1" />
</div>
</nav>
          </div>
        </div>
      </nav>
        </>
    );
}
export default Nav;