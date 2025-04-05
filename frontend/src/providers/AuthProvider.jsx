import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // social or goole providers
    const googleProvider = new GoogleAuthProvider();
    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign in with email and password
    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // log out
    const logOut = () => {
        return signOut(auth);
    }
    // tracking of current user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        passwordLogin,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;