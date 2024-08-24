// import React, { createContext, useEffect, useState } from 'react';
// import { getUser } from './authService';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         getUser().then(setUser);
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { keycloak } from '../auth/keycloak';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       keycloak.authenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

// export default PrivateRoute;
