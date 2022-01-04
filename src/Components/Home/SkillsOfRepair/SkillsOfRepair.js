import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import img from './../../../images/repairing mobile.jpg'
const SkillsOfRepair = () => {
    return (
        <>
            <div className="row container mx-auto my-5 align-items-center">
                <div className="col-md-6 my-5">
                    <div><h1 className='text-info'>Our Services Skills __________ </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum repellat ab, recusandae necessitatibus id at corrupti accusantium alias sapiente repudiandae molestiae quia officiis ut aliquid nobis fuga voluptatum nihil in eum atque consequuntur ea nemo modi. Ducimus saepe deleniti iusto animi tenetur suscipit, ratione, quod corrupti non perferendis atque!</p></div>
                    <div className='mt-2 py-3'>
                        <ProgressBar completed={90} customLabel="Mobile Servicing Skills " maxCompleted={100} />
                    </div>
                    <div className='mt-2 py-3 '>
                        <ProgressBar completed={87} customLabel="Laptop Servicing Skills " maxCompleted={100} />
                    </div>
                    <div className='mt-2 py-3 '>
                        <ProgressBar completed={75} customLabel="Camera Servicing Skills " maxCompleted={100} />
                    </div>
                    <div className='mt-2 py-3 '>
                        <ProgressBar completed={80} customLabel="Gadgetes Servicing Skills " maxCompleted={100} />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <img src={img} className='img-fluid' alt="" />
                </div>
            </div>

        </>
    );
};

export default SkillsOfRepair;