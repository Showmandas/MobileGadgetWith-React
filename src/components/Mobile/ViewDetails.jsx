import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import './ViewDetails.css'
const ViewDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const details = useLoaderData();
  const [mobileDetails, setMobileDetails] = useState({});
  useEffect(() => {
    const data = details.find((detail) => detail.id === parseInt(id));
    setMobileDetails(data);
  }, []);
  return (
    <div>
      {/* <h3>details page</h3> */}
      
      <div className="row g-5 my-5">
        <div className="col-lg-6 col-12">
          <img src={mobileDetails.mobile_img} className="img-fluid detail_img" alt="Mobile Image" />
        </div>
        <div className="col-lg-6 col-12">
          <div className="card w-75 p-3 shadow">
            <div class="card-body d-flex flex-column gap-2">
              <h4 className="card-title">{mobileDetails.mobile_name}</h4>
              <p className="card-text bg-warning-subtle w-25 fw-bold text-center">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                {mobileDetails.price}
              </p>
              <p className="card-text"><span className="fw-semibold">Company : </span>{mobileDetails.companyName} </p>
              <p className="card-text"><span className="fw-semibold">Model : </span>{mobileDetails.model}</p>
              <p className="card-text"><span className="fw-semibold">RAM : </span>{mobileDetails.ram}</p>
              <p className="card-text"><span className="fw-semibold">Camera : </span>{mobileDetails.camera}</p>
              <p className="card-text"><span className="fw-semibold">Battery : </span> {mobileDetails.battery}</p>
              <p className="card-text">
                <span className="fw-bold">Country : </span>Made in {mobileDetails.country}
              </p>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Link href="#" className="btn btn-outline-info fw-bold">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
