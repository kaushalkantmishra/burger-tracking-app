import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TrackingPage from "./pages/TrackingPage";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PostLogin from "./pages/PostLoginPage";
import Onboarding from "./pages/Onboarding";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/post-login" element={<PostLogin />} />
          <Route
            path="/tracking"
            element={
              <PrivateRoute>
                <TrackingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
