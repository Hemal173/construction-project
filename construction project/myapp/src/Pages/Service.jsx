import React from 'react';
import axios from "axios";
import { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom';

function Service(props) {
  let[Name,setName]=useState();
    let[email,setEmail]=useState();
    let[date,setDate]=useState();
    let[time,setTime]=useState();
    let[message,setMessage]=useState();

    const[images,setimages]=useState([]);

    useEffect(() => {
        
      fetch("http://127.0.0.1/api/homeconstruction.php")
     
      .then((res) => {
          
          res.json().then(result => {
              
              setimages(result);    
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
            date:date,
            time:time,
            message:message
        }
        axios({
            method: "post",
            url: "http://127.0.0.1/api/requestinsert.php",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res =>{
            console.log(res);
            alert("Record Insert Sucessfully");
           
        })
    }

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
    <h1 className="display-3 text-uppercase text-white mb-3">Service</h1>
    <div className="d-inline-flex text-white">
      <h6 className="text-uppercase m-0">
        <a href="">Home</a>
      </h6>
      <h6 className="text-white m-0 px-3">/</h6>
      <h6 className="text-uppercase text-white m-0">Service</h6>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Services Start */}
  <div className="container-fluid bg-light py-6 px-5">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 text-uppercase mb-4">
        We Provide <span className="text-primary">The Best</span> Construction
        Services
      </h1>
    </div>
    
    <div className='row g-5'>
      {images.map((val) => (

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white d-flex flex-column align-items-center text-center">
              <img className="img-fluid" src={val.img} alt={val.name} />
              <div className="service-icon bg-white">
                <i className="fa fa-3x fa-building text-primary" />
              </div>
              <h3>{val.name}</h3>
              <p>{val.detail}</p>
              <a className="btn text-primary" href="">
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
      ))}
    </div>

  </div>
  {/* Services End */}
  {/* Appointment Start */}
  <div className="container-fluid py-6 px-5">
    <div className="row gx-5">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="mb-4">
          <h1 className="display-5 text-uppercase mb-4">
            Request A <span className="text-primary">Call Back</span>
          </h1>
        </div>
        <p className="mb-5">
          Nonumy ipsum amet tempor takimata vero ea elitr. Diam diam ut et eos
          duo duo sed. Lorem elitr sadipscing eos et ut et stet justo, sit
          dolore et voluptua labore. Ipsum erat et ea ipsum magna sadipscing
          lorem. Sit lorem sea sanctus eos. Sanctus sit tempor dolores ipsum
          stet justo sit erat ea, sed diam sanctus takimata sit. Et at voluptua
          amet erat justo amet ea ipsum eos, eirmod accusam sea sed ipsum kasd
          ut.
        </p>
        <a className="btn btn-primary py-3 px-5" href="">
          Get A Quote
        </a>
      </div>
      <div className="col-lg-8">
        <div className="bg-light text-center p-5">
          <form onSubmit={handleEvent}>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  className="form-control border-0"
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="email"
                  className="form-control border-0"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <div className="date" id="date" data-target-input="nearest">
                  <input
                    type="text"
                    className="form-control border-0 datetimepicker-input"
                    placeholder="Call Back Date"
                    onChange={(e)=>setDate(e.target.value)}
                    data-target="#date"
                    data-toggle="datetimepicker"
                    style={{ height: 55 }}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="time" id="time" data-target-input="nearest">
                  <input
                    type="text"
                    className="form-control border-0 datetimepicker-input"
                    placeholder="Call Back Time"
                    onChange={(e)=>setTime(e.target.value)}
                    data-target="#time"
                    data-toggle="datetimepicker"
                    style={{ height: 55 }}
                  />
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0"
                  onChange={(e)=>setMessage(e.target.value)}
                  rows={5}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Appointment End */}
  {/* Testimonial Start */}
  <div className="container-fluid bg-light py-6 px-5">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 text-uppercase mb-4">
        What Our <span className="text-primary">Happy Cleints</span> Say!!!
      </h1>
    </div>
    <div className="row gx-0 align-items-center">
      <div className="col-xl-4 col-lg-5 d-none d-lg-block">
        <img className="img-fluid w-100 h-100" src="assets/img/testimonial.jpg" />
      </div>
      <div className="col-xl-8 col-lg-7 col-md-12">
        <div className="testimonial bg-light">
          <div className="owl-carousel testimonial-carousel">
            <div className="row gx-4 align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <img
                  className="img-fluid w-100 h-100 bg-light p-lg-3 mb-4 mb-md-0"
                  src="assets/img/testimonial-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7">
                <h4 className="text-uppercase mb-0">Client Name</h4>
                <p>Profession</p>
                <p className="fs-5 mb-0">
                  <i className="fa fa-2x fa-quote-left text-primary me-2" />{" "}
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut labore et
                  tempor diam tempor erat. Erat dolor rebum sit ipsum.
                </p>
              </div>
            </div>
            <div className="row gx-4 align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <img
                  className="img-fluid w-100 h-100 bg-light p-lg-3 mb-4 mb-md-0"
                  src="assets/img/testimonial-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7">
                <h4 className="text-uppercase mb-0">Client Name</h4>
                <p>Profession</p>
                <p className="fs-5 mb-0">
                  <i className="fa fa-2x fa-quote-left text-primary me-2" />{" "}
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut labore et
                  tempor diam tempor erat. Erat dolor rebum sit ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
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

export default Service;