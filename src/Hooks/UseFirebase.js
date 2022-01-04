import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import authenticationFirebase from "../Components/Login/firebase.init";

authenticationFirebase()

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                savedUser(user.email, user.displayName, 'PUT')
                const redirect_uri = location?.state?.from || '/';
                navigate(redirect_uri)
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));


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
    const savedUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://nameless-tor-87895.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    useEffect(() => {
        fetch(`https://nameless-tor-87895.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        isLoading,
        user,
        error,
        admin,
        setUser,
        logOut,
        signInWithGoogle


    }
}


export default useFirebase