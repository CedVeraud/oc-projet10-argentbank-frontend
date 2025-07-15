//***/ CENTRALISER LA PROTECTION DES ROUTES /***//

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Redirige vers la page /login si l'utilisateur n'est pas authentifié.
function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;