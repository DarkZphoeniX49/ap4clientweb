import React from 'react';
import { Navigate } from 'react-router-dom';
const AuthGuard = ({children}) => {
    
    let logged = localStorage.getItem('token');

    if(logged){
    return children;}
    else{
        return <Navigate to="/Auth/Login" />
    }
}

export default AuthGuard;
