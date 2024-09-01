import React from 'react';
import axios from "axios";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

function Detail(props) {
   
  let[Name,setName]=useState();
  let[email,setEmail]=useState();
  let[website,setWebsite]=useState();
  let[comment,setComment]=useState();
  

  
  function handleEvent(e)
  {

      e.preventDefault();
      const data={
          name:Name,
          email:email,
          website:website,
          comment:comment
      }
      axios({
          method: "POST",
          url: "http://127.0.0.1/api/leavecomment.php",
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
              <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2" />WEBUILD</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
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
                <a href className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Get A Quote <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </nav>
        </div>
        {/* Navbar End */}
        {/* Page Header Start */}
        <div className="container-fluid page-header">
          <h1 className="display-3 text-uppercase text-white mb-3">Blog Detail</h1>
          <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0"><a href>Home</a></h6>
            <h6 className="text-white m-0 px-3">/</h6>
            <h6 className="text-uppercase text-white m-0">Blog Detail</h6>
          </div>
        </div>
        {/* Page Header Start */}
        {/* Blog Start */}
        <div className="container-fluid py-6 px-5">
          <div className="row g-5">
            <div className="col-lg-8">
              {/* Blog Detail Start */}
              <div className="mb-5">
                <img className="img-fluid w-100 rounded mb-5" src="assets/img/blog-2.jpg" alt="" />
                <h1 className="text-uppercase mb-4">Diam dolor duo ipsum clita sed lorem tempor. Clita kasd diam justo diam
                  lorem sed amet sed rebum eos.</h1>
                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                  magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                  amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                  aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                  sit stet no diam kasd vero.</p>
                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                  vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                  nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                  ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                  clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                  justo dolore sit invidunt.</p>
                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                  invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                  lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                  rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                  sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                  lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                  sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
              </div>
              {/* Blog Detail End */}
              {/* Comment List Start */}
              <div className="mb-5">
                <h3 className="text-uppercase mb-4">3 Comments</h3>
                <div className="d-flex mb-4">
                  <img src="assets/img/user.jpg" className="img-fluid" style={{width: '45px', height: '45px'}} />
                  <div className="ps-3">
                    <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                    <button className="btn btn-sm btn-light">Reply</button>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <img src="assets/img/user.jpg" className="img-fluid" style={{width: '45px', height: '45px'}} />
                  <div className="ps-3">
                    <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                    <button className="btn btn-sm btn-light">Reply</button>
                  </div>
                </div>
                <div className="d-flex ms-5 mb-4">
                  <img src="assets/img/user.jpg" className="img-fluid" style={{width: '45px', height: '45px'}} />
                  <div className="ps-3">
                    <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                      accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                    <button className="btn btn-sm btn-light">Reply</button>
                  </div>
                </div>
              </div>
              {/* Comment List End */}
              {/* Comment Form Start */}
              <div className="bg-light p-5">
                <h3 className="text-uppercase mb-4">Leave a comment</h3>
                <form onSubmit={handleEvent}>
                  <div className="row g-3"> 
                  
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control bg-white border-0"onChange={(e)=>setName(e.target.value)} placeholder="Your Name" style={{height: '55px'}} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" className="form-control bg-white border-0" onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" style={{height: '55px'}} />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control bg-white border-0" onChange={(e)=>setWebsite(e.target.value)} placeholder="Website" style={{height: '55px'}} />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control bg-white border-0" rows={5} onChange={(e)=>setComment(e.target.value)} placeholder="Comment" defaultValue={""} />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Leave Your Comment</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Comment Form End */}
            </div>
            {/* Sidebar Start */}
            <div className="col-lg-4">
              {/* Search Form Start */}
              <div className="mb-5">
                <div className="input-group">
                  <input type="text" className="form-control p-3" placeholder="Keyword" />
                  <button className="btn btn-primary px-3"><i className="fa fa-search" /></button>
                </div>
              </div>
              {/* Search Form End */}
              {/* Category Start */}
              <div className="mb-5">
                <h3 className="text-uppercase mb-4">Categories</h3>
                <div className="d-flex flex-column justify-content-start bg-light p-4">
                  <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Web Design</a>
                  <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Web Development</a>
                  <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Web Development</a>
                  <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Keyword Research</a>
                  <a className="h6 text-uppercase mb-0" href="#"><i className="fa fa-angle-right me-2" />Email Marketing</a>
                </div>
              </div>
              {/* Category End */}
              {/* Recent Post Start */}
              <div className="mb-5">
                <h3 className="text-uppercase mb-4">Recent Post</h3>
                <div className="bg-light p-4">
                  <div className="d-flex mb-3">
                    <img className="img-fluid" src="assets/img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                    <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img className="img-fluid" src="assets/img/blog-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                    <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img className="img-fluid" src="assets/img/blog-3.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                    <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img className="img-fluid" src="assets/img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                    <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img className="img-fluid" src="assets/img/blog-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                    <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                    </a>
                  </div>
                  <div className="d-flex">
                    <img className="img-fluid" src="assets/img/blog-3.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                    <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                    </a>
                  </div>
                </div>
              </div>
              {/* Recent Post End */}
              {/* Image Start */}
              <div className="mb-5">
                <img src="assets/img/blog-1.jpg" alt="" className="img-fluid rounded" />
              </div>
              {/* Image End */}
              {/* Tags Start */}
              <div className="mb-5">
                <h3 className="text-uppercase mb-4">Tag Cloud</h3>
                <div className="d-flex flex-wrap m-n1">
                  <a href className="btn btn-outline-dark m-1">Design</a>
                  <a href className="btn btn-outline-dark m-1">Development</a>
                  <a href className="btn btn-outline-dark m-1">Marketing</a>
                  <a href className="btn btn-outline-dark m-1">SEO</a>
                  <a href className="btn btn-outline-dark m-1">Writing</a>
                  <a href className="btn btn-outline-dark m-1">Consulting</a>
                  <a href className="btn btn-outline-dark m-1">Design</a>
                  <a href className="btn btn-outline-dark m-1">Development</a>
                  <a href className="btn btn-outline-dark m-1">Marketing</a>
                  <a href className="btn btn-outline-dark m-1">SEO</a>
                  <a href className="btn btn-outline-dark m-1">Writing</a>
                  <a href className="btn btn-outline-dark m-1">Consulting</a>
                </div>
              </div>
              {/* Tags End */}
              {/* Plain Text Start */}
              <div>
                <h3 className="text-uppercase mb-4">Plain Text</h3>
                <div className="bg-light rounded text-center" style={{padding: '30px'}}>
                  <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                  <a href className="btn btn-primary py-2 px-4">Read More</a>
                </div>
              </div>
              {/* Plain Text End */}
            </div>
            {/* Sidebar End */}
          </div>
        </div>
        {/* Blog End */}
        {/* Footer Start */}
        <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
          <div className="row g-5">
            <div className="col-lg-6 pe-lg-5">
              <a href="index.html" className="navbar-brand">
                <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2" />WEBUILD</h1>
              </a>
              <p>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
              <p><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt me-2" />+012 345 67890</p>
              <p><i className="fa fa-envelope me-2" />info@example.com</p>
              <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded-0" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="row g-5">
                <div className="col-sm-6">
                  <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />Home</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />About Us</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />Our Services</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />Meet The Team</a>
                    <a className="text-white-50" href="#"><i className="fa fa-angle-right me-2" />Contact Us</a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4 className="text-white text-uppercase mb-4">Popular Links</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />Home</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />About Us</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />Our Services</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2" />Meet The Team</a>
                    <a className="text-white-50" href="#"><i className="fa fa-angle-right me-2" />Contact Us</a>
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
              <p className="mb-0">© <a className="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
            </div>
            <div className="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
              <p className="mb-0">Designed by <a className="text-dark" href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a> 
        </div>
    );
}

export default Detail;