// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import CallbackPage from '../src/Callback';
// import HomePage from '../src/Home';
// import { useContext } from 'react';
// // import PrivateRoute, { AuthContext } from './auth/AuthContext';
// import { Login } from './auth/login';

// function App() {

//   // const { user } = useContext(AuthContext);

//     return (
//         <Router>
//           <Routes>
//               {/* <Route path="/callback" element={<CallbackPage/>} />
//               <Route path="/" element={<HomePage/>} /> */}

//               <Route path="/" element={<HomePage/>} />
//               <Route path="/login" element={<Login/>} />
              
//               {/* <PrivateRoute path="/" element={<HomePage/>} /> */}
//               {/* <PrivateRoute path="/login" element={<Login/>} /> */}
//               {/* <Route path="/login" element={<Login/>} /> */}

//           </Routes>
//         </Router>
//     );
// }

// export default App;

//================================================================================================================

// import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
// import CallbackPage from '../src/Callback';
// import { useContext, useEffect } from 'react';
// import { AuthContext } from './auth/AuthContext';
// import { Login } from './auth/login';
// import Home from './Home';
// import { login } from './auth/authService';

// function App() {

//   const { user } = useContext(AuthContext);
//   console.log("user", user);

//   useEffect(() => {
//     if (!user) {
//       login();
//     }
//   }, [user]);

//   if (!user) {
//     // Optionally return a loading spinner or some placeholder while redirecting
//     return <div>Loading...</div>;
//   }

//     return (
//         <Router>
//           <Routes>
//               {/* <Route path="/callback" element={<CallbackPage/>} />
//               <Route path="/" element={<HomePage/>} /> */}

//               <Route path="/" element={user ? <Home/> : <Login />} />
//               <Route path="/login" element={<Login />} />

//           </Routes>
//         </Router>
//     );
// }

// export default App;

//================================================================================================================

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './auth/login';
import Home from './Home';

function App() {

    return (
        <Router>
          <Routes>
              {/* <Route path="/callback" element={<CallbackPage/>} />
              <Route path="/" element={<HomePage/>} /> */}

              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login />} />

          </Routes>
        </Router>
    );
}

export default App;