/** @format */

import React from "react";
import { Navigate } from "react-router-dom";

const AntiAuthGuard = ({ children }) => {
  let logged = localStorage.getItem('token');
console.log(logged)

  if (logged) {
    return    (

    <Navigate to='/User/BarList' />
    );

  } else {
    return <>{children}</>;
  }
};

export default AntiAuthGuard;
