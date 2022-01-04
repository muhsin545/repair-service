import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Registration from './Registration';


//  this is a details page about a package
const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();

    const [offer, setOffer] = useState();
    useEffect(() => {
        fetch(`https://nameless-tor-87895.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setOffer(data))
    }, [])


    return (
        <>
            <div className='row container mx-auto my-5 align-items-center g-3 '>
                <div className="col-md-6  p-3 text-center">
                    <img src={offer?.img} alt="" className="img-fluid w-50  my-4" />
                    <br />
                    <b className='bg-info   px-3 py-2 rounded-pill'><i>PRICE : </i>{offer?.price}</b>
                    <div className="my-3 text-left">

                        <h4 className='text-info'>{offer?.productName}</h4>
                        <Rating
                            initialRating={4.5}
                            emptySymbol="far fa-star text-warning"
                            fullSymbol="fas fa-star  text-warning"
                            readonly
                        />
                        <p>{offer?.description.slice(0, 300)}</p>
                    </div>


                </div>
                <div className="col-md-5 ">
                    <Registration offer={offer}></Registration>

                </div>
            </div>
        </>
    );
};

export default PlaceOrder;