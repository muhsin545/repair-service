import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";




const Registration = ({ offer }) => {

    // console.log(offer.img)

    const { user } = useAuth();
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {

        data.status = "pending";
        data.email = `${user?.email}`;
        fetch("https://nameless-tor-87895.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result)
                if (result.insertedId) {
                    alert(
                        "Good job!",
                        "You Ordered This product Successfully!",
                        "success"
                    );
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="from-section py-1 ms-auto border text-warning">
                <h3 className="fw-bold text-center">Purchase Product</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        defaultValue={user?.displayName}
                        {...register("name", { required: true })}

                    /><br />
                    <input
                        defaultValue={user?.email}
                        {...register("email", { required: true })}
                    /><br />
                    <input
                        defaultValue={offer?.productName}
                        {...register("productName", { required: true })}

                    /><br />

                    <input type="img" defaultValue={offer?.img}
                        {...register("img", { required: true })} /><br />
                    <input
                        placeholder="Your Current Address"
                        {...register("address", { required: true })}

                    /><br />
                    <input
                        placeholder="Your Number"
                        {...register("number", { required: true })}
                    />

                    <br />

                    <br />
                    <input className="btn btn-info" type="submit" />
                </form>
            </div>
        </div>
    );

}
export default Registration;