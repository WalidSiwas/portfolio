import React from "react";

function Header() {
  return (
    <header>
    <nav id="my-nav" className="navbar navbar-expand-custom navbar-mainbg overflow-auto " >
      <a className="navbar-brand navbar-logo" href="#home">Home</a>
      <button className="navbar-toggler" type="button">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <a className="nav-link" href="#about" ><i><img src="./images/about-icon.svg" width="22" height="22"/></i>About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#projects" ><i><img src="./images/projects-icon.svg" width="18" height="18"/></i>Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#cotanct"><i><img src="./images/contact-icon.svg" width="18" height="18"/></i>Contact</a>
          </li>
  
        </ul>
      </div>
    </nav>

   
    <div className="pb-5"></div>
  </header>
  );
}

export default Header;
