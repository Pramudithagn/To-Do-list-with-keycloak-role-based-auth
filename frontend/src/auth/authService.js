import { UserManager } from 'oidc-client';
import { config } from './config';

export const userManager = new UserManager(config);
console.log(userManager)

export const login = () => {
    console.log("begin login")
    userManager.signinRedirect().catch(error => console.log("Login error: ", error));
    // userManager.signinRedirectCallback().catch(error => console.log("Login error: ", error));
    console.log("finish login")

}
export const logout = () => userManager.signoutRedirect();
// export const getUser = () => userManager.getUser();


export const getUser = () => userManager.getUser().then(user => {
    if (user) {
        // Store the JWT token in local storage or session storage
        localStorage.setItem('token', user.access_token);
    }
    return user;
});

export const getToken = () => {
    return localStorage.getItem('token');
};
