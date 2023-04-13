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
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
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
            </div>
          </div>
        </div>
      </div>
      <div>
      <Link to={'/mobile'} ><button className="btn">Back to shop</button></Link>
      </div>
    </div>
  );
};

export default CartItem;
