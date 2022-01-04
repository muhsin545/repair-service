import React, { useEffect, useState } from 'react';
import Product from './Product/Product'
import Service from './Product/Service/Service';

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nameless-tor-87895.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='text-center mx-auto my-5 py-5'>
            <h1 className=' text-warning fs-1 fw-bold mb-5 pb-5'>----HOT SERVICES---</h1>
            <div className="mx-auto text-center">
                {
                    services.length === 0 ? <div class="d-flex justify-content-center">
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                        : <div>
                            <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mx-auto">
                                {
                                    services.slice(0, 3).map(singlePackage => (

                                        <Product
                                            key={singlePackage._id} singlePackage={singlePackage}></Product>

                                    ))
                                }

                            </div>
                        </div>
                }


            </div>

        </div>
    );
};

export default Products;