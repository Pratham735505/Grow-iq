import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/adminauth";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      saveToken(token);
      navigate("/admin/dashboard");
    }
  }, [location, navigate]);

  const googleLogin = () => {
    window.location.href = "http://localhost:3000/api/admin/google";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700 text-center">Admin Login</h1>
      <button
        onClick={googleLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Login with Google
      </button>
    </div>
  );
}
