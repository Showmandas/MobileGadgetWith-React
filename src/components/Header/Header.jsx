import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Link</Link>
        </li>
        <li className="nav-item">
          
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button  className="btn btn-outline-warning">Sign up</button>
        <button className="btn btn-outline-success">Log in</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;