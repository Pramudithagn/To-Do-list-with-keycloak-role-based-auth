import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import KeyCloakService from '../src/security/KeycloakService.js';
import React from 'react'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// )

const renderApp = function() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
    <App/>
  </Provider>
    </React.StrictMode>,
  );
};

KeyCloakService.CallLogin(renderApp);

//================================================================================================================

// // src/index.jsx
// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { Provider } from 'react-redux';
// import store from './redux/store.js';
// import { keycloak, initKeycloak } from '../src/auth/keycloak.js';

// const Root = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   console.log(authenticated)

//   useEffect(() => {
//     initKeycloak(() => setAuthenticated(true));
//   }, []);

//   if (!authenticated) return <div>Loading...</div>;
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

//================================================================================================================


// // src/index.jsx
// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { Provider } from 'react-redux';
// import store from './redux/store.js';
// import { keycloak, initKeycloak } from '../src/auth/keycloak.js';
// import { KeycloakProvider, useKeycloak } from '@react-keycloak/web';

// // const Root = () => {
// //   const [authenticated, setAuthenticated] = useState(false);
// //   console.log(authenticated)

// //   useEffect(() => {
// //     initKeycloak(() => setAuthenticated(true));
// //   }, []);

// //   if (!authenticated) return <div>Loading...</div>;
// //   return (
// //     <Provider store={store}>
// //       <App />
// //     </Provider>
// //   );
// // };

// const keycloakConfig = {
//   url: 'http://localhost:8081/',
//   realm: 'test',
//   clientId: 'testclient',
// };

// const WrappedApp = () => (
//   <KeycloakProvider keycloakConfig={keycloakConfig}>
//       <Provider store={store}>
//       <App />
//     </Provider>
//   </KeycloakProvider>
// );

// const AuthApp = () => {
//   const { keycloak, initialized } = useKeycloak();

//   if (!initialized) {
//       return <div>Loading...</div>;
//   }

//   if (!keycloak.authenticated) {
//       return <div>Not authenticated</div>;
//   }

//   return (
//     <WrappedApp/>
//       // <div>
//       //     <p>Welcome, {keycloak.tokenParsed.name}</p>
//       //     <button onClick={() => keycloak.logout()}>Logout</button>
//       // </div>
//   );
// };

// // ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
// ReactDOM.createRoot(document.getElementById('root')).render(<AuthApp />);

// //=====================


// // const keycloakConfig = {
// //     realm: 'your-realm',
// //     url: 'your-keycloak-url',
// //     clientId: 'your-client-id'
// // };

// // const WrappedApp = () => (
// //     <KeycloakProvider keycloakConfig={keycloakConfig}>
// //         <App />
// //     </KeycloakProvider>
// // );

// // export default WrappedApp;

