import React from 'react';
import Banner from './Banner/Banner';
import Contact from './ContactForm/Contact';
import FollowingSteps from './FollowingSteps/FollowingSteps';
import Help from './Help/Help';
// import Review from './Review/Review';
import SkillsOfRepair from './SkillsOfRepair/SkillsOfRepair';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Products from './Products/Products'
import Testimonial from '../Review/Testimonial';
import Review from '../Review/Review';
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <Help></Help>
            <FollowingSteps></FollowingSteps>
            <Review></Review>
            <SpecialOffer></SpecialOffer>
            <SkillsOfRepair></SkillsOfRepair>
            <Contact></Contact>

        </div>
    );
};

export default Home;