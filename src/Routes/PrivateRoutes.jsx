import React, { useContext } from 'react';
import { authContex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authContex)
    const location=useLocation()
    if (loading) {
        return <div className='flex justify-center'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoutes;