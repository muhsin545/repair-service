import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import authenticationFirebase from './../FireBase/firebase.init';


authenticationFirebase()

const UseFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)
            .finally(() => setIsLoading(false))
    }
    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, []);
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).finally(() => setIsLoading(false))
    }
    return {
        isLoading,
        user,
        error,
        setUser,
        logOut,
        handleGoogleLogin,
        setError
    }
}


export default UseFirebase