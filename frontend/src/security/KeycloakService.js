// import Keycloak from "keycloak-js";

// const keycloakInstance = new Keycloak();

// /**
//  * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
//  *
//  * @param onAuthenticatedCallback
//  */
// const Login = (onAuthenticatedCallback) => {
//   keycloakInstance
//     .init({ onLoad: "login-required", 
//     pkceMethod: 'S256' })
//     .then((authenticated) => {
//       authenticated ? onAuthenticatedCallback() : alert("non authenticated");
//     })
//     .catch((e) => {
//       console.dir(e);
//       console.log(`keycloak init exception: ${e}`);
//     });
// };
// console.log(keycloakInstance)
// console.log(keycloakInstance.refreshToken)

// const UserName = () => keycloakInstance.tokenParsed?.preferred_username;

// const KeyCloakService = {
//   CallLogin: Login,
//   GetUserName: UserName
// };

// export default KeyCloakService;

//======================================================================================================

import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak();

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const Login = (onAuthenticatedCallback) => {
  keycloakInstance
    .init({ onLoad: "login-required", pkceMethod: 'S256' })
    .then((authenticated) => {
      if (authenticated) {
        onAuthenticatedCallback();
        console.log("Token after authentication:", keycloakInstance.token);
      } else {
        alert("Non authenticated");
      }
    })
    .catch((e) => {
      console.dir(e);
      console.log(`Keycloak init exception: ${e}`);
    });
};

const UserName = () => keycloakInstance.tokenParsed?.preferred_username;

const GetAccessToken = () => {
  if (keycloakInstance.token) {
    console.log("Token authentication when requesting:", keycloakInstance.token);
    return keycloakInstance.token;
  } else {
    console.warn("Token is undefined. Make sure the user is authenticated.");
    return null;
  }
};

const KeyCloakService = {
  CallLogin: Login,
  GetUserName: UserName,
  GetAccessToken: GetAccessToken,
};

export default KeyCloakService;
