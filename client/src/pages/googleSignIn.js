import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export const GoogleSignIn = () => {
    const handleSuccess = (credentialResponse) => {
        console.log(credentialResponse);
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


