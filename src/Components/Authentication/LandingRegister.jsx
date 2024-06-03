
import React from 'react';
import { Link } from 'react-router-dom';
// import './../App.css';
import './desgin.css';
import Header from './Header';

const VerticalDivider = () => {
  return (
    <>
    <Header></Header>
    <div className="vertical-divider-container">
      <div className="left-side">
        <div className="left-content">
          <h1 className="left-heading">For Customers</h1>
          <Link to="/Register/CustomerRegister">
            <button className="left-button">Register</button>
          </Link>
        </div>
      </div>
      <div className="right-side">
        <div className="right-content">
          <h1 className="right-heading">For Vendors</h1>
          <Link to="/Register/VendorRegister">
            <button className="right-button">Register</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default VerticalDivider;