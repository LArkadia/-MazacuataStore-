import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (adminOnly) {
    const emailPattern = /^ilovepaper[2-6]@example\.com$/;
    if (!emailPattern.test(email)) {
      return <Navigate to="/" />;
    }
  }

  return children;
};

export default ProtectedRoute;
