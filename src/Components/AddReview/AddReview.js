import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import logo from './../../images/21691-ai.png';
const Testimonials = () => {
    const { user } = useAuth();
    // console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://nameless-tor-87895.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("review inserted successfully")
                }
                reset()
            })

        // console.log(data);
    };
    return (
        <div className="row container mx-auto text-center my-5 p-5 align-items-center">
            <div className='text-center text-warning p-5 my-5 col-md-4'>

                <img src={logo} className='img-fluid' width='300px' alt="" />
            </div>

            <div className=' col-md-8 bg-light p-3'>
                <h3 className='text-warning fs-2 fw-bold text-uppercase'>Leave A review</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input class="fs-5 text-warning" {...register("Reviewer", { required: true })} defaultValue={user.displayName} /> <br />
                    <input class="fs-5 text-warning" {...register("description", { required: true })} placeholder='Leave Your Review ' /> <br />
                    <input class="fs-5 text-warning" {...register("img")} defaultValue={user?.photoURL} /> <br />
                    <input class="fs-5 text-warning" type="number" {...register("Rating", { min: 1, max: 5 }, { required: true })} placeholder='Rate Our service between 1-5' /> <br />
                    <input type="submit" class="px-5 py-3 border fs-5 fw-bolder btn-warning" value="SUBMIT" />
                </form>
            </div>

        </div>
    );
};

export default Testimonials;