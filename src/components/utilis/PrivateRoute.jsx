import { Navigate } from "react-router-dom";
import useStore from "../../store";

// Only the authenticated user should have access to the component.
const PrivateRoute = ({ Component }) => {
  const { isLoggedIn } = useStore();
  return !isLoggedIn ? <Navigate to="/" replace /> : <Component />;
};

export default PrivateRoute;
