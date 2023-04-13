import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex justify-content-center align-items-center gap-3  m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link" href="#"><i className="fa-solid fa-house"></i></Link>
        </li>
       
        <li className="nav-item">
          <Link to={'about'} className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          
        </li>
        <li className="nav-item">
          <Link to={'contact'} className="nav-link">Contact</Link>
        </li>
        <li className='nav-item'>
            <Link to={'cart'} className='nav-link'><i className="fa-solid fa-cart-shopping"></i></Link>
        </li>
      </ul>
      <div className="d-flex justify-content-center gap-3" role="search">
        <button  className="btn text-warning"><i className="fa-solid fa-right-to-bracket"></i></button>
        <button className="btn"><i className="fa-solid fa-sun"></i></button>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;