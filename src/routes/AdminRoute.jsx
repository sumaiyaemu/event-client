
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider"; 

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const adminEmail = "eventbook@gmail.com"; // ✅ your admin email here

  if (loading) {
    return <div><span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span></div>; 
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.email !== adminEmail) {
    return <Navigate to="/not-authorized" replace />;
  }

  return children;
};

export default AdminRoute;
