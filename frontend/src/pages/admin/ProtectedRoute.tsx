import { Navigate } from "react-router-dom";
import { getToken,isAdmin } from "../../utils/adminauth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = getToken();
  const admin = isAdmin();

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!admin) {
    return <Navigate to="/admin/unauthorized" replace />;
  }

  return children;
}
