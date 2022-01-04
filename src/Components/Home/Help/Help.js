import React from 'react';
import { NavLink } from 'react-router-dom';
import iphone from './../../../images/iphonex-removebg-preview.png'
const Help = () => {
    return (
        <div className='my-5 py-5'>
            <h1 className='text-center my-5'>How <span className='text-info'>We Can Help</span> You!!!</h1>
            <div className="row container mx-auto align-items-center">
                <div className="col-md-6 g-3 py-3">
                    <h1 className='text-uppercase'>We can help you now, <span className='text-info'>fill out an application!</span></h1>
                    <span>__________</span>
                    <h4 className='text-gray'>Let us help! If your phone has a broken front glass, non-responsive buttons</h4>
                    <p className='text-gray'>Non eget orci, pretium wisi maecenas eu, adipiscing nulla quisque maecenas pellentesque, ac placerat parturient. Vitae urna orci tortor, eu integer. Fringilla ut sed. Ut phasellus suspendisse ut amet, animi scelerisque, arcu mauris mauris euismod ornare elit felis. Voluptatibus enim dolor, sem quisque turpis, ut vitae, vel dui lectus.</p>
                    <NavLink to="/about" className='btn btn-outline-info px-3 py-2 text-uppercase fw-bold'>About Us</NavLink>
                </div>
                <div className="col-md-6 mx-auto">
                    <img src={iphone} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Help;