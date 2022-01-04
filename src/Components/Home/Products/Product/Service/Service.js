import React, { useState } from 'react';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../../Hooks/useAuth';

import './../Product.css'
const Service = ({ singlePackage }) => {

    console.log(singlePackage)

    const { user } = useAuth();
    const navigate = useNavigate();
    const seeDetails = (id) => {
        navigate(`/services/${id}`)
    }

    return (
        <div className='container-fluid '>

            <div class="col ">
                <div class="card h-100 p-3 text-center">

                    <img src={singlePackage?.img} class="card-img-top w-50 align-self-center" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-info">{singlePackage.productName}</h5>
                        <h5 class="card-title  text-info">Price: ${singlePackage.price}</h5>
                        <p class="card-text text-start">{singlePackage.description.slice(0, 300)}</p>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <button
                            onClick={() => { seeDetails(singlePackage?._id) }} className="btn btn-info rounded-pill">BOOK NOW</button>
                        <Rating
                            initialRating={4.5}
                            emptySymbol="far fa-star text-warning"
                            fullSymbol="fas fa-star  text-warning"
                            readonly
                        />
                    </div>
                </div>

            </div>








        </div>
    );
};

export default Service;

