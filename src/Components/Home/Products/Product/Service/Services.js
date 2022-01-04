import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nameless-tor-87895.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mx-auto my-5 py-5'>

                <div>
                    <h1 className=' text-warning fs-1 fw-bold'>----HOT SERVICES---</h1>

                </div>



                <div className="mx-auto text-center">
                    {
                        services.length === 0 ?
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border text-warning" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>

                            :

                            <div>
                                <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mx-auto">
                                    {
                                        services.map(singlePackage => (<>
                                            <Service
                                                key={singlePackage._id} singlePackage={singlePackage}></Service>

                                        </>
                                        ))
                                    }

                                </div>
                            </div>
                    }


                </div>

            </div>
        </div>
    );
};

export default Services;