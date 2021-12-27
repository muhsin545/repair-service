import React from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Rating from 'react-rating';
import img1 from './../../../images/man1.jpg';
import img2 from './../../../images/man2.jpg';
import img3 from './../../../images/man3.jpg';
import img4 from './../../../images/man4.jpg';
import img5 from './../../../images/man6.jpg'
import SwiperCore, { Pagination, Autoplay } from 'swiper';



const Review = () => {

    // SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
    // if you want to use array
    const slide = [
        { name: 'Bodor Rabbani', rating: 4, img: img1, saying: 'Very good service they are provide .I highly recommand  ' },
        { name: 'Naem Hasan', rating: 5, img: img2, saying: 'Very good service they are provide .I highly recommand  ' },
        { name: 'Salman Bin Farid', rating: 4, img: img3, saying: 'Very good service they are provide .I highly recommand  ' },
        { name: 'Hujaifa Salman', rating: 4, img: img4, saying: 'Very good service they are provide .I highly recommand  ' },
        { name: 'Sazid Hasan', rating: 4, img: img5, saying: 'Very good service they are provide .I highly recommand  ' }
    ];
    SwiperCore.use([Pagination, Autoplay]);

    return (
        <>
            <>
                <div className='text-center my-5'>
                    <h1>Our Clients Say__________</h1>
                </div>
                <Swiper slidesPerView={1} spaceBetween={30} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} className="mySwiper  text-dark">
                    {
                        slide.map(singleSlide => <SwiperSlide>
                            <div class="card p-5" style={{ width: '23rem', height: 'auto' }}>
                                <img src={singleSlide.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{singleSlide.name}</h5>
                                    <p>⭐ ⭐ ⭐ ⭐ ⭐ </p>
                                    <p class="card-text">{singleSlide.saying}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }






                </Swiper>
            </>
        </>
    );
};
export default Review
