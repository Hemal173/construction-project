import React from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";


function Team(props) {

  let[Name,setName]=useState();
  let[email,setEmail]=useState();

  const[icon,seticon]=useState([]);

  useEffect(() => {
        
    fetch("http://127.0.0.1/api/expertworkers.php")
   
    .then((res) => {
        
        res.json().then(result => {
            
            seticon(result);    
            console.log(result,"check");                    
        })
    })
  }, []);

  function handleEvent(e)
    {

      e.preventDefault();
      const data={
          name:Name,
          email:email,
          
      }
      axios({
          method: "post",
          url: "http://127.0.0.1/api/newsletterinsert.php",
          data: data,
          headers: { "Content-Type": "multipart/form-data" },
      }).then(res =>{
          console.log(res);
          alert("Record Insert Sucessfully");
         
      })
    }

    return (
        <div>
        
  <div className="container-fluid px-5 d-none d-lg-block">
    <div className="row gx-5">
      <div className="col-lg-4 text-center py-3">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-geo-alt fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase fw-bold">Our Office</h6>
            <span>123 Street, New York, USA</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center border-start border-end py-3">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-envelope-open fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase fw-bold">Email Us</h6>
            <span>info@example.com</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center py-3">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase fw-bold">Call Us</h6>
            <span>+012 345 6789</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
    <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
      <a href="index.html" className="navbar-brand">
        <h1 className="m-0 display-4 text-uppercase text-white">
          <i className="bi bi-building text-primary me-2" />
          WEBUILD
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
          <NavLink to="/About" className="nav-item nav-link">About</NavLink>
          <NavLink to="/Service" className="nav-item nav-link">Service</NavLink>
         
          
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
            <NavLink to="/Project" className="dropdown-item">Our Project</NavLink>
            <NavLink to="/Team" className="dropdown-item">The team</NavLink>
            <NavLink to="/Testimonial" className="dropdown-item">Testimonial</NavLink>
            <NavLink to="/Blog" className="dropdown-item">Blog Grid</NavLink>
            <NavLink to="/Detail" className="dropdown-item">Blog Detail</NavLink>
          </div>
          </div>
          <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
          <a
            href=""
            className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"
          >
            Get A Quote <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </nav>
  </div>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid page-header">
    <h1 className="display-3 text-uppercase text-white mb-3">The Team</h1>
    <div className="d-inline-flex text-white">
      <h6 className="text-uppercase m-0">
        <a href="">Home</a>
      </h6>
      <h6 className="text-white m-0 px-3">/</h6>
      <h6 className="text-uppercase text-white m-0">The Team</h6>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Team Start */}
  <div className="container-fluid py-6 px-5">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 text-uppercase mb-4">
        We Are <span className="text-primary">Professional &amp; Expert</span>{" "}
        Workers
      </h1>
    </div>

   

<div className="row g-5">


{icon.map((val) => (
  <div className="col-xl-3 col-lg-4 col-md-6">
  <div className="row g-0">
  <div className="col-10" style={{ minHeight: 300 }}>
  <div className="position-relative h-100">
      <img src={val.img}  />
      
      <img src={val.icon} class="btn"  />
      
      
      <div className="col-12">
            <div className="bg-light p-4">
              <h4 className="text-uppercase">Adam Phillips</h4>
              <span>CEO &amp; Founder</span>
            </div>
          </div>
      
      </div>
      </div>
      </div>
      </div>

))}
</div>
</div>

  {/* Team End */}
  {/* Footer Start */}
  <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
    <div className="row g-5">
      <div className="col-lg-6 pe-lg-5">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 display-4 text-uppercase text-white">
            <i className="bi bi-building text-primary me-2" />
            WEBUILD
          </h1>
        </a>
        <p>
          Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy.
          Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore
          sed stet justo et dolor.
        </p>
        <p>
          <i className="fa fa-map-marker-alt me-2" />
          123 Street, New York, USA
        </p>
        <p>
          <i className="fa fa-phone-alt me-2" />
          +012 345 67890
        </p>
        <p>
          <i className="fa fa-envelope me-2" />
          info@example.com
        </p>
        <div className="d-flex justify-content-start mt-4">
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0"
            href="#"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-6 ps-lg-5">
        <div className="row g-5">
          <div className="col-sm-6">
            <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                Home
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                About Us
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                Our Services
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                Meet The Team
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right me-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <h4 className="text-white text-uppercase mb-4">Popular Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                Home
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                About Us
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                Our Services
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2" />
                Meet The Team
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right me-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-sm-12">
            <h4 className="text-white text-uppercase mb-4">Newsletter</h4>
            <div className="w-100">
              <div className="input-group">
                <form onSubmit={handleEvent}>
                <input
                  type="name"
                  className="form-control border-light"
                  onChange={(e)=>setName(e.target.value)}
                  style={{ padding: "20px 30px" }}
                  placeholder="Your Name"
                /><br></br>
                <input
                 type="text"
                 className="form-control border-light"
                 onChange={(e)=>setEmail(e.target.value)}
                 style={{ padding: "20px 30px" }}
                 placeholder="Your Email Address"
                /><br></br>
                
              <button className="btn btn-primary px-4">Sign Up</button>
                {/* onClick={navigateToContact} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
    <div className="d-flex flex-column flex-md-row justify-content-between">
      <div className="py-4 px-5 text-center text-md-start">
        <p className="mb-0">
          ©{" "}
          <a className="text-primary" href="#">
            Your Site Name
          </a>
          . All Rights Reserved.
        </p>
      </div>
      <div className="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
        <p className="mb-0">
          Designed by{" "}
          <a className="text-dark" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>


        </div>
    );
}

export default Team;