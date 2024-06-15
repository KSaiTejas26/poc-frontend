import React from 'react'
import "./style.css";
 
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
               
                <div className="row ">
                    <div className="col-md-3 d-flex justify-content-center">
                    <div className="footer-col">
                        <h4>RealPage</h4>
                        <ul>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Markets</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">User Group</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Client Support</a></li>
                            <li><a href="#">Consumer Support</a></li>
                            <li><a href="#">Vendor Support</a></li>
                            <li><a href="#">Training</a></li>
                            <li><a href="#">Responsible Disclosure</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="#">1.277.325.7243</a></li>
                            <li><a href="#">Media Relations</a></li>
                            <li><a href="#">Client Portal</a></li>
                            <li><a href="#">Level One Login</a></li>
                            <li><a href="#">Contact Sales</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}