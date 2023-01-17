import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

const location = useLocation()
  return (
    <Fragment>
      {!loading && (
        <Fragment>
          {isAuthenticated ? children : <Navigate to="/login" state={{from:location}} replace={true} />}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProtectedRoute;