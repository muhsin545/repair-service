import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Testimonial from './Testimonial';


const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://nameless-tor-87895.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <div className=" text-center mb-2 my-5 py-5">
                <h1 className='fw-bold fs-1 text-info'>Our--Client's--Reviews</h1>
            </div>
            {
                review.length === 0 ?
                    <div class="d-flex justify-content-center my-5">
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="row container mx-auto text-center justify-content-center my-3">
                        {
                            review.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
            }
            <div className='text-center  mb-5'>
                <NavLink to="/addReview" className='btn btn-info px-2 py-1'>Leave Your Review</NavLink>
            </div>
        </div>
    );
};

export default Review;








/* <div className="row container mx-auto text-center justify-content-center my-5 p-5">
                <div className="col-md-3">
                    <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" className='img-fluid  rounded-circle w-50' alt="" />
                    <br />
                    <Rating
                        initialRating={2.8}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star  text-warning"

                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam, voluptas labore nihil quod repellat sint quo est veniam fugit vero porro nobis voluptatibus hic earum voluptate tempora recusandae quasi?</p>
                </div>
                <div className="col-md-3">
                    <img src="https://images.unsplash.com/photo-1548964095-b9a292144866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" className='img-fluid  rounded-circle w-50' alt="" /><br />
                    <Rating
                        initialRating={2.8}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star  text-warning"

                    /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam, voluptas labore nihil quod repellat sint quo est veniam fugit vero porro nobis voluptatibus hic earum voluptate tempora recusandae quasi?</p>
                </div>
                <div className="col-md-3">
                    <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className='img-fluid  rounded-circle w-50' alt="" /><br />
                    <Rating
                        initialRating={2.8}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star  text-warning"

                    /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam, voluptas labore nihil quod repellat sint quo est veniam fugit vero porro nobis voluptatibus hic earum voluptate tempora recusandae quasi?</p>
                </div>
                <div className="col-md-3">
                    <img src="https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className='img-fluid  rounded-circle w-50' alt="" /><br />
                    <Rating
                        initialRating={2.8}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star  text-warning"

                    /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam, voluptas labore nihil quod repellat sint quo est veniam fugit vero porro nobis voluptatibus hic earum voluptate tempora recusandae quasi?</p>
                </div>

            </div> */