import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export const GoogleSignIn = () => {
    const navigate = useNavigate();
    const handleSuccess = (credentialResponse) => {
        window.localStorage.setItem("userID", credentialResponse.credential);
        navigate('/'); // Navigate home
    };

    const handleError = () => {
        console.log('Login Failed');
    };
    return (
        <GoogleOAuthProvider clientId="1059952033538-u2hr35qvitd61botq5umugicum48m82b.apps.googleusercontent.com">
            <GoogleLogin onSuccess={handleSuccess} onError={handleError}>
                Sign in with Google
            </GoogleLogin>
        </GoogleOAuthProvider>
    );
};


