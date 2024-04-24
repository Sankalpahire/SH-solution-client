import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark h-1 m-3 mx-auto">
        <div className="container-fluid">
          <a className="navbar-brand px-5 fw-bold" href="#">CODE-SANKALAK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Docs</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Languages
                </a>
                <ul className="dropdown-menu dropdown-menu-dark rounded-5" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-success my-auto ">Feedback</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
