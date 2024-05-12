import {  useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return (<div className="flex min-h-svh justify-center items-center">
    <span className="loading loading-spinner loading-lg"></span>
  </div>)
  }

  if(user) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
};

export default PrivateRoute;