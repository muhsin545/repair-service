import React from 'react';
import { Route, Redirect, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation()
    if (isLoading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (user.email && admin) {
        return children
    }
    return (
        <Navigate to="/signin" state={{ from: location }} />
    )

};

export default AdminRoute;