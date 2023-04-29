import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { user } = useContext(AuthContext);
    console.log(location);
    console.log(user);
    if (user?.email) {
        return children;
    }
    else {
        return <Navigate state={{ from: location }} to='/login' replace></Navigate>
    }

};

export default PrivateRoute;