import { Fragment } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  const alert = useAlert()
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
  loading === false && (
   isAdmin && user.role!=="admin" && alert.error("Access Protected!") 
  )
 

  const location = useLocation();
  return (
    <Fragment>
      {loading === false && (
        <Fragment>
          {isAuthenticated === false ||
          (isAdmin === true && user.role !== "admin") ? (
            <Navigate to="/login" state={{ from: location }} replace={true} />
          ) : (
            children
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
