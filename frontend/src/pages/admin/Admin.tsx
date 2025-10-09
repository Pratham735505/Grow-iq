import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Notices from "./Notices";
import Timetable from "./Timetable";
import LoginHistory from "./LoginHistory";
import Unauthorized from "./Unauthorized";
import ProtectedRoute from "./ProtectedRoute";

export default function AdminSection() {
  return (
    <Routes>
      {/* Default /admin redirects to login */}
      <Route path="/" element={<Navigate to="login" replace />} />

      {/* Login page */}
      <Route path="login" element={<Login />} />

      {/* Protected admin pages */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="notices"
        element={
          <ProtectedRoute>
            <Notices />
          </ProtectedRoute>
        }
      />
      <Route
        path="timetable"
        element={
          <ProtectedRoute>
            <Timetable />
          </ProtectedRoute>
        }
      />
      <Route
        path="login-history"
        element={
          <ProtectedRoute>
            <LoginHistory />
          </ProtectedRoute>
        }
      />

      {/* Unauthorized page */}
      <Route path="unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}
