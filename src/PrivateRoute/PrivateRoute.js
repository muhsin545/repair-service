import { Route, Navigate, Routes, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



function PrivateRoute(props) {
  const { children, ...rest } = props;
  const { user, isLoading } = useAuth();
  let location = useLocation()
  if (isLoading) {
    return <div class="d-flex justify-content-center">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  }

  if (user.email) {
    return children
  }
  return (
    <Navigate to="/signin" state={{ from: location }} />
  )

}

export default PrivateRoute;