import React from 'react';
import img1 from './../../images/man1.jpg'
import img2 from './../../images/man2.jpg'
import img3 from './../../images/man3.jpg'
import img4 from './../../images/man4.jpg'
const About = () => {
    return (
        <div className='aboutUsPage py-5'>
            <div className="row aboutDemo-content container mx-auto py-5">
                <h1 className='text-center py-5 '>OUR TEAM</h1>
                <div className="col-md-3 mx-auto text-center bg-dark border ourTeam">
                    <img src={img1} className='img-fluid w-50 rounded-circle' alt="" />
                    <h4>MAHMUD NADIM</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos perspiciatis officia ipsa aut, iusto quos quidem eos.</p>
                </div>
                <div className="col-md-3 mx-auto text-center bg-dark ourTeam border">
                    <img src={img2} className='img-fluid w-50 rounded-circle' alt="" />
                    <h4>Reja Salim</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos perspiciatis officia ipsa aut, iusto quos quidem eos.</p>
                </div>
                <div className="col-md-3 mx-auto text-center bg-dark ourTeam border">
                    <img src={img3} className='img-fluid w-50 rounded-circle' alt="" />
                    <h4>Ifzal Hussain</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos perspiciatis officia ipsa aut, iusto quos quidem eos.</p>
                </div>
                <div className="col-md-3 mx-auto text-center bg-dark ourTeam border">
                    <img src={img4} className='img-fluid w-50 rounded-circle' alt="" />
                    <h4>Muhsin Ahmad</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos perspiciatis officia ipsa aut, iusto quos quidem eos.</p>
                </div>

            </div>
        </div>
    );
};

export default About;