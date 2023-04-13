import React from 'react';
import './MobileCard.css'
import { Link } from 'react-router-dom';
const MobileCard = ({mobile}) => {
    const{id,mobile_name,mobile_img,price}=mobile;
    console.log(mobile);
    return (
        <div className='col-12 col-lg-4'>
            <div className="card">
  <img src={mobile_img} className="img-fluid w-100 img" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">{mobile_name}</h5>
    <p className="card-text"><i class="fa-solid fa-bangladeshi-taka-sign"></i> {price}</p>
   <div className='d-flex justify-content-center align-items-center gap-4'>
   <Link to={`/details/${id}`} className="btn bg-primary-subtle w-100">View Details</Link>
   
   </div>
  </div>
</div>
        </div>
    );
};

export default MobileCard;