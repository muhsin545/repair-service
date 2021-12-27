import React from 'react';
import logo from "../../images/21691-ai.png"
const Footer = () => {
    return (
        <footer className='banner'>
            <div className="row container text-center mx-auto mt-5 align-items-center w-100">
                <div className="col-md-3 my-5 fw-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width='120' class="d-inline-block  align-text-center img-fluid mx-1" />
                        <p className='fs-4 text-light fw-bold'> REPAIR SERVICES</p>
                    </a>

                </div>
                <div className="col-md-3 my-5 fw-light text-center">
                    <h5>
                        <i class="fas fa-compass  mx-2 "></i>
                        <span> OUR MAIN OFFICE</span></h5>
                    <div className='fw-normal mx-3'>
                        <p>Mejortila,ShahPoran,Sylhet</p>
                        <p>Postal Code: 3100</p>
                        <p>Phone:+8806765654</p>
                        <p>Mail:Admin@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-3 my-5 fw-light text-center">
                    <h5>
                        <i class="fas fa-share-alt mx-2"></i>
                        KEEP IN TOUCH WITH US</h5>
                    <h6><i class="fab fa-facebook fs-3 mx-3 mt-2"></i> Facebook</h6>
                    <h6><i class="fab fa-twitter-square fs-3  me-4"></i>Twitter</h6>
                    <h6><i class="fab fa-instagram-square  fs-3 mx-3"></i>Instagram</h6>
                </div>
                <div className="col-md-3 my-5 fw-light">
                    <h5>
                        <i class="fas fa-info-circle mx-2"></i>
                        INFORMATIONS</h5>
                    <div className="d-flex align-items-center justify-content-between ">
                        <div className='footer'>
                            <p> <a href="#">About Us</a>    </p>
                            <p> <a href="#">Contact Us</a>  </p>
                            <p> <a href="#">FAQ</a>         </p>

                        </div>
                        <div className='footer'>
                            <p>     <a href="#">Terms and Conditions</a></p>
                            <p>     <a href="#">My Account</a>          </p>
                            <p>     <a href="#">Blog</a>                </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;