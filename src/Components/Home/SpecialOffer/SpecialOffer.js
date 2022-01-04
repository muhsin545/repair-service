import React from 'react';

const SpecialOffer = () => {
    return (
        <div id="specialOffer" className='py-5'>
            <div className=' mt-5 py-5 my-5 text-center container-fluid'>
                <div className='py-5'>
                    <h1 id='discount'>DISCOUNTS ARE GOING ON ON THE OCCASION
                        OF DIGITAL SERVICE FAIR </h1></div>

                <div className='my-5 text-center'>
                    <div class="form-floating mb-3 w-75 mx-auto text-dark">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <br />
                    <input type="submit" className='fs-4 fw-bold my-1 px-3 btn btn-warning rounded-3 ' value="SUBSCRIBE" />
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;