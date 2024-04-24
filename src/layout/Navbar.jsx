import React from 'react'
import logo from '../assets/title.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); // Use React Router's useNavigate hook to navigate to different routes
  return (
 <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
      <a href="index.html" class="logo me-auto"><img src={logo} alt="" class="img-fluid"/></a>


      <nav id="navbar" class="navbar justify">
        <ul>
          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          <li><a class="nav-link scrollto" href="about">About</a></li>
          <li><a class="nav-link scrollto" href="train">Train</a></li>
          {/* <button className="nav-link" onClick={() => navigate("/train")}>
            Train
          </button> */}
          <li><a class="nav-link scrollto " href="settings">Settings</a></li>
          <li class="dropdown"><a href="/"><span>Profile</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="profile">Profile</a></li>
              <li><a href="editProfile">Edit Profile</a></li>
              <li><a href="/">LogOut</a></li>
            </ul>
          </li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>  )
}

export default Navbar