import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import authenticationFirebase from './firebase.init';

authenticationFirebase()

const Login = () => {
    const { handleGoogleLogin, error, setIsLoading, logOut, user, setUser } = useAuth();


    const location = useLocation();
    // console.log('came', location?.state?.from);


    const navigate = useNavigate();
    const redirect_uri = location?.state?.from || '/'

    const GoogleLogin = () => {

        handleGoogleLogin()
            .then(result => {
                navigate.push(redirect_uri)
                // setUser(result);
            })
    };
    return (
        <div className='my-5 text-center mx-auto'>

            <button className='btn fs-4 fw-bold g-2 btn-outline-primary px-3' onClick={GoogleLogin}>
                <img src="http://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png" className='img-fluid mx-2' width='50' alt='' />
                Continue with Google </button>

        </div>
    );
};

export default Login;













