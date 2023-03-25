
import {Link} from 'react-router-dom';
import React from 'react';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={{
          border: "1px solid black",
          boxShadow: props.mode === 'light' ? "10px 10px 5px lightblue" : "10px 10px 5px darkBlue"
        }} >
        <div className="container-fluid">
          <a className="navbar-brand " href="#">{props.Navbar}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">{props.Home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/link">{props.Link}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disable" to="/about">{props.About}</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success " type="submit">{props.Search}</button>
            </form>
          </div>
        </div>
        <div className="d-flex">
          <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}>
          </div>
          <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}>
          </div>
          <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}>
          </div>
          <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}>
          </div>
          <div className='bg-secondary rounded mx-2' onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'light'}`} style={{ paddingRight: "10px" }}>
          <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark&nbsp;&nbsp;Mode</label>
        </div>
      </nav>
    </div>
  );
}


