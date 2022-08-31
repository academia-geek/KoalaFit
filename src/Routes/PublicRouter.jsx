import { Navigate } from "react-router-dom";

export const PublicRouter = ({ isAutentication, children }) => {
    return !isAutentication ? children : <Navigate to="/Home" />;
};