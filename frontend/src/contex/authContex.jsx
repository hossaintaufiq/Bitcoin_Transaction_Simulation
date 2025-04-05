import {React, useState,useEffect } from "react";
import {auth} from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext);
}
export function AuthProvider ({ children }) {
    const[currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(auth,initializeUser);
        
        return unsubscribe;
    }, [])


    async function initializeUser(...user) {
        if(user){
            setCurrentUser(user);
            setUserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = { currentUser, userLoggedIn,loading };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );


}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;



// import { React, useState, useEffect } from "react";
// import { auth } from "../firebase/firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth"; // Correct import

// const AuthContext = React.createContext();

// export function useAuth() {
//     return React.useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Correct usage of imported onAuthStateChanged
//         const unsubscribe = onAuthStateChanged(auth, initializeUser);
//         return unsubscribe;
//     }, []);

//     // Removed async and fixed parameter
//     function initializeUser(user) {
//         if (user) {
//             setCurrentUser(user);
//             setUserLoggedIn(true);
//         } else {
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }

//     const value = { currentUser, userLoggedIn, loading };

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// }

// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired
// };
