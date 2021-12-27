import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/21691-ai.png"

const Navbar = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light Navbar ">
                <div class="container-fluid">
                    <nav class="navbar navbar-light ">
                        <div class="container-fluid">
                            <NavLink class="navbar-brand" to='/home'>
                                <img src={logo} alt="" width='120' class="d-inline-block  align-text-center img-fluid mx-1" />
                                <span className='fs-4 text-light fw-bold'> REPAIR SERVICES</span>
                            </NavLink>
                        </div>
                    </nav>
                    <button class="navbar-toggler btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item fs-4 mx-3">
                                <NavLink to='/home'>Home</NavLink>
                            </li>
                            <li class="nav-item fs-4 mx-3">
                                <NavLink to='/service'>Service</NavLink>
                            </li>
                            <li class="nav-item fs-4 mx-3">
                                <NavLink to='/about'>About us</NavLink>
                            </li>
                            <li class="nav-item fs-4 mx-3">
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                            <li class="nav-item fs-4 mx-3">
                                <NavLink to='/login'>Sign in</NavLink>
                            </li>
                        </ul>

                        <form class="d-flex ms-lg-auto  py-2" onSubmit={handleSubmit}>
                            <input class="form-control me-2 rounded-3" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light rounded-3 px-3" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;