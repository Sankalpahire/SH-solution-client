import React from 'react'
const Nav = () => {
  return (
    <>
    
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark h-1">
  <div className="container-fluid">
    <a className="navbar-brand px-5 fw-bold " href="#">CODE-SANKALAK</a>
   
    <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center gap-3">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <button type="button" className="btn btn-outline-success ">Feedback</button>

    </div>
  </div>
</nav>
    </>

  )
}

export default Nav