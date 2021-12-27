import React from 'react';
import maker from './../../../images/maker.jpg'


const FollowingSteps = () => {
    return (
        <div className='followingSteps'>
            <div className="row container-fluid my-5 mx-auto  text-primary">
                <div className="col-md-6 mx-auto text-center px-5 g-4 py-5  bg-dark ">
                    <div className='py-3 my-3 g-3 text-uppercase'>
                        <h2>To order a repair you need to do the following steps</h2>
                        <span>_____________</span>
                        <b>The optimum ratio of price and quality responsible
                            and conscientious approach</b>
                    </div>
                    <div>
                        <i class="fas fa-headset p-3 rounded-circle i"></i>
                        <h4 className='fw-bold  rounded text-uppercase'>  Step 1 - dial our phone</h4>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci quia dolo velit</p>
                    </div>
                    <div>
                        <i class="fas fa-user-cog  py-4 px-3 rounded-circle i"></i>

                        <h4 className='fw-bold  rounded text-uppercase'>Step 2 - select a specialist</h4>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci quia dolo velit</p>
                    </div>
                    <div>
                        <i class="far fa-clock  p-3 rounded-circle i"></i>

                        <h4 className='fw-bold  rounded text-uppercase'>Step 3 - choose the right time</h4>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci quia dolo velit</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={maker} className='img-fluid maker pt-4' alt="" />
                </div>
            </div>
        </div>
    );
};

export default FollowingSteps;