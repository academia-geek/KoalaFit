import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ isAutentication, children }) => {
  return isAutentication ? children : <Navigate to="/" />;
};