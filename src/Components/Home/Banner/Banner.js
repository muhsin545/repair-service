import React from 'react';
import img1 from './../../../images/banner1.jpg'
import img2 from './../../../images/banner2.jpg'
import img3 from './../../../images/banner3.jpg'
import img4 from './../../../images/banner4.jpg'
import img5 from './../../../images/banner5.jpg'




const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="15000">
                        <img src={img1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block d-md-block text-info">
                            <h1>FAST REPAIR YOUR SMART PHONE</h1>
                            <b>OUR COMPANY IS PRODUCES THE URGENT REPAIR OF MOBILE DEVAICES WITHOUT A HEALTHY COSTS!!</b>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                        <img src={img2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block d-md-block text-info">
                            <h1>FAST REPAIR YOUR SMART CAMERA</h1>
                            <b>OUR COMPANY IS PRODUCES THE URGENT REPAIR OF CAMERA DEVAICES WITHOUT A HEALTHY COSTS!!</b>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                        <img src={img3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block d-md-block text-info ">
                            <h1>FAST REPAIR YOUR SMART WATCHES</h1>
                            <b>OUR COMPANY IS PRODUCES THE URGENT REPAIR OF WATCHE DEVAICES WITHOUT A HEALTHY COSTS!!</b>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                        <img src={img4} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block d-md-block text-info ">
                            <h1>FAST REPAIR YOUR SMART LAPTOP</h1>
                            <b>OUR COMPANY IS PRODUCES THE URGENT REPAIR OF LAPTOP DEVAICES WITHOUT A HEALTHY COSTS!!</b>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1500">
                        <img src={img5} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block d-md-block text-info">
                            <h1>FAST REPAIR YOUR SMART CAMERA WITH A GOOD OFFER</h1>
                            <b>OUR COMPANY IS PRODUCES THE URGENT REPAIR OF MOBILE DEVAICES WITHOUT A HEALTHY COSTS!!</b>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn-outline-info" aria-hidden="true"></span>
                    <span class="visually-hidden ">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon btn-outline-info" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;