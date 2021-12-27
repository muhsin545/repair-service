import React from 'react';

const SpecialOffer = () => {
    return (
        <div id="specialOffer">
            <div className=' mt-5  py-5 my-5 text-center container-fluid'>
                <div className='py-5'>
                    <h1 id='discount'>DISCOUNTS ARE GOING ON ON THE OCCASION
                        OF DIGITAL SERVICE FAIR </h1></div>

                <div className='my-5'>
                    <input type="text" placeholder='example@gmail.com ' className='w-75 py-2 rounded-3 px-5 border border-danger' /> <br />
                    <input type="submit" className='fs-3 fw-bold my-2 px-5 btn btn-danger rounded-3 ' value="SUBSCRIBE" />
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;