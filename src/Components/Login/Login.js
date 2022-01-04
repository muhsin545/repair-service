import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
    const { signInWithGoogle, error, setIsLoading, logOut, user, setUser } = useAuth();

    const location = useLocation()
    const navigate = useNavigate();


    const GoogleLogin = () => {
        signInWithGoogle(location, navigate)

    };
    return (
        <div className='my-5 text-center mx-auto py-5 '>

            <button className='btn  fs-4 fw-bold btn-info px-2' onClick={GoogleLogin}>
                <img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" className='img-fluid me-2 rounded-circle' width='50' alt='' />
                Continue with Google </button>

        </div>
    );
};

export default Login;













