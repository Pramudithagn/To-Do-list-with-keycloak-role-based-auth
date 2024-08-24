import React, { useEffect } from 'react';
import { userManager } from '../src/auth/authService';

const CallbackPage = () => {
    useEffect(() => {
        userManager.signinRedirectCallback().then(user => {
            console.log("Login successful", user);
            window.location.href = "/";
        }).catch(error => {
            console.error("Error handling callback", error);
        });
    }, []);

    return <div>Loading...</div>;
};

export default CallbackPage;
