import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) return <div className="w-full h-[100vh] flex justify-center items-center text-2xl"><p>Loading...</p></div>


    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/signIn'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;