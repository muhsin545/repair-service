import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from "../../images/21691-ai.png"

const Navbar = () => {
    const { user, admin, logOut } = useAuth()


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light Navbar ">
                <div class="container-fluid">
                    <nav class="navbar navbar-light ">
                        <div class="container-fluid">
                            <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} class="navbar-brand" to='/home'>
                                <img src={logo} alt="" width='120' class="d-inline-block  align-text-center img-fluid mx-1" />
                                <span className='fs-4 text-info fw-normal'> REPAIR SERVICES</span>
                            </NavLink>
                        </div>
                    </nav>
                    <button class="navbar-toggler border border-info btn btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item fs-6 mx-2  mt-2">
                                <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/home'>Home</NavLink>
                            </li>
                            <li class="nav-item fs-6 mx-2  mt-2">
                                <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/services'>Services</NavLink>
                            </li>

                            <li class="nav-item fs-6 mx-2  mt-2">
                                <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/about'>About us</NavLink>
                            </li>
                            <li class="nav-item fs-6 mx-2 mt-2">
                                <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/contact'>Contact</NavLink>
                            </li >

                            {
                                user.email && <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle text-info" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dashboard
                                    </Link>


                                    <ul class="dropdown-menu  bg-dark" aria-labelledby="navbarDropdown">


                                        <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                            style={{ color: "#FEB800" }}
                                            className="nav-link active nav-NavLink  text-info"
                                            to="/myOrders"
                                        >
                                            My Orders
                                        </NavLink>

                                        <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                            className="nav-link active nav-NavLink  text-info"
                                            to="/addReview"
                                        >
                                            Add Review
                                        </NavLink>




                                        {
                                            user.email && admin && (
                                                <>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-link active nav-NavLink  text-info"
                                                        to="/allOrders"
                                                    >
                                                        Manage All Orders
                                                    </NavLink>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-link active nav-NavLink  text-info"
                                                        to="/addProducts"
                                                    >
                                                        Add a Products
                                                    </NavLink>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-link active nav-NavLink  text-info"
                                                        to="/allProducts"
                                                    >
                                                        Manage Products
                                                    </NavLink>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-link active nav-NavLink  text-info"
                                                        to="/makeAdmin"
                                                    >
                                                        Make Admin
                                                    </NavLink>
                                                </>)
                                        }

                                        <li onClick={logOut} className=" btn ms-2 btn-info">
                                            Log Out
                                        </li>

                                    </ul >

                                </li >}












                            {/* Sign in and sign up here below */}


                            {
                                !user.email &&
                                < li class="nav-item fs-6 mx-2  mt-2">
                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/signin' className='border border-info px-4 py-2 rounded-pill'>Sign in</NavLink>
                                </li >}

                            <li class="nav-item fs-6 mx-2  mt-2">
                                <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/'>{user.displayName}</NavLink>
                            </li >

                            {
                                user.email &&
                                < li class="nav-item fs-6 mx-2 mt-2">
                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/' className='border px-3 py-2 border border-info rounded-pill' onClick={logOut}>Sign Out</NavLink>
                                </li>}








                        </ul >
                    </div >
                </div >
            </nav >
        </>
    );
};

export default Navbar;