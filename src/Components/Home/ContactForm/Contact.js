import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        alert("Successfully Submitted Your Message! Stay with us")

        e.preventDefault()
    }

    return (
        <div className='my-5 py-5 banner'>

            <div className="row container mx-auto align-items-center">
                <div className="col-md-6 my-5">
                    <div className="text-center my-4">
                        <h1>Contact Form</h1>
                        <span>__________</span>
                    </div>
                    <div className="row mx-auto align-items-center my-5 me-2">
                        <div className="col-md-6">
                            <i class="fas fa-gem i p-4 rounded-circle"></i>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <h5>Office location –</h5> our office consists of three buildings and is located in the heart of the city. You can easily reach us by metro or by land transport.
                        </div>
                    </div>
                    <div className="row mx-auto align-items-center my-5 me-2">
                        <div className="col-md-6">
                            <i class="fas fa-phone-volume  i p-4 rounded-circle"></i>
                        </div>
                        <div className="col-md-6 mx-auto">
                            Monday to Friday: 9:00 AM to 6:00 PM
                            Saturday: 9:00 AM to 5:00 PM
                            Sunday: Closed
                        </div>
                    </div>
                    <div className="row mx-auto align-items-center my-5 me-2">
                        <div className="col-md-6">
                            <i class="fas fa-compress-arrows-alt i p-4 rounded-circle"></i>
                        </div>
                        <div className="col-md-6 mx-auto">
                            Address: 685 Lane Drive St. California, 33020
                            Phone: +010 234 7892 34
                            Fax: +010 435 5798982
                            Email: info@irepair.com
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="https://formsubmit.co/muhibullahmuhsin545@gmail.com" method="POST" >
                        <input type="text" className='py-2 w-100' required placeholder='Enter Your Name' /> <br />
                        <input type="number" className='my-2 py-2 w-100' required placeholder='Enter Your Phone Number' /> <br />
                        <input type="text" className='py-2 w-100' required placeholder='Enter Your Address' /> <br />
                        <input type="email" name="email" className='my-2 py-2 w-100' placeholder='Enter Your Email ' required id="" /> <br />
                        <textarea name="message" id="" className='mb-2 w-100 py-2' cols="30" placeholder='Write Your Message' rows="10"></textarea>
                        <input type="submit" value="SUBMIT" className=' w-100 p-2 btn btn-outline-light ' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;