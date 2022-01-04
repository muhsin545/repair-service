import React from 'react';
import { useForm } from 'react-hook-form';
import './NewOffer.css'
import logo from './../../images/21691-ai.png'
import useAuth from '../../Hooks/useAuth';
const NewOffer = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://nameless-tor-87895.herokuapp.com/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("product inserted successfully")
                }

            })
        reset()
        console.log(data);
    };
    return (
        <div className='row container mx-auto text-center my-5 align-items-center pb-5'>
            <div className='text-center text-warning col-md-5'>
                <img src={logo} className='img-fluid' alt="" />
            </div>

            <div className=' col-md-7 bg-light py-3'>
                <h4 >Insert A New Product</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input class="fs-5 text-warning" {...register("productName", { required: true })} placeholder='Product Name' /> <br />
                    <input class="fs-5 text-warning" {...register("description", { required: true })} placeholder='Product Description' /> <br />
                    <input class="fs-5 text-warning" {...register("img", { required: true })} placeholder='Product Relevent Image' /> <br />
                    <input class="fs-5 text-warning" type="number" {...register("price", { required: true })} placeholder='Product Price' /> <br />
                    <input type="submit" class="px-5 py-3 border fs-5 btn fw-bolder btn-warning" value="SUBMIT" />
                </form>
            </div>
        </div>
    );
};

export default NewOffer;