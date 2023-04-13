import React from 'react';
import Lottie from "lottie-react";
import mobile from '../assets/Lottiemobile.json'
import { Link } from 'react-router-dom';
// import mobile from '../assets/'

const Banner = () => {
    return (
        <div className='row my-5'>
            <div className="col-lg-6 col-12 d-flex flex-column gap-3 justify-content-center">
                <h1 className='fw-bold display-3'>Get your mobile</h1>
                <p className='text-body-secondary'>The mobile shop buzzes with activity, showcasing the latest smartphones and accessories. Customers browse the sleek displays, comparing features and prices. The staff is knowledgeable and helpful, assisting with queries and recommendations. Deals and discounts catch the eye, enticing customers to upgrade or purchase a new device. The shop is a hub of technological wonders, with gadgets that cater to every need and budget. From trendy gadgets to reliable classics, the mobile shop offers a wide selection, leaving customers satisfied and eager to embrace the world of mobile technology.</p>
              <Link to={'mobile'}><button className='btn bg-info-subtle btn-outline-info text-dark fw-semibold'>Visit Mobile Shop &nbsp; <i class="fa-solid fa-bag-shopping"></i></button></Link>  
            </div>
            <div className="col-lg-6 col-12">
            <Lottie animationData={mobile} loop={true} />
            </div>
            
        </div>
    );
};

export default Banner;