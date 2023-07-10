/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PanierNum = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 text-right'>
          <div className='shopping-cart' onClick={() => Navigate("/Panier")}>
            <i className='fas fa-shopping-cart fa-2x'></i>
            <span className='cart-quantity badge badge-secondary'>
              {getTotalQuantity() || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanierNum;
