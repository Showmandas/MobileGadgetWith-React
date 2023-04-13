import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mobiles from './Mobile/Mobiles';
import Banner from './Banner';

const Home = () => {
    
    return (
        <div>
            {/* <Mobiles/> */}
            <Banner/>
        </div>
    );
};

export default Home;