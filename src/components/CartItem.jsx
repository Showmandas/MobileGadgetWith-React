import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  const { id, quantity, mobile_img, price, mobile_name } = product;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5">
      <div className="card w-50 mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={mobile_img}
              className="img-fluid rounded-start"
              alt="mobile image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
              <h5 className="card-title">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> {price}
              </h5>
              <p className="card-text">
                <small className="text-body-secondary">{mobile_name}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Quantity: {quantity}
                </small>
              </p>
              <p>
                <button className="btn ">Remove</button>
              </p>
              </div>
              <div>
                <h5>${price * quantity}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;
