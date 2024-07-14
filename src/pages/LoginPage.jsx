import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/Button.png";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(emailRef.current.value, passwordRef.current.value);
      navigate("/post-login");
      // Clear input fields
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch {
      setError("Failed to sign in");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/post-login");
      // Clear input fields
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch {
      setError("Failed to sign in with Google");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-bold">Login to your account</h1>
        <p className="mt-2 text-gray-600">Please sign in to your account</p>
        {error && <p className="mt-2 text-red-600">{error}</p>}
        <label htmlFor="email" className="mt-4 block font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          required
          placeholder="Enter your email"
          className="mt-1 p-2 w-full border rounded"
        />
        <label
          htmlFor="password"
          className="mt-4 block font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          required
          placeholder="Enter your password"
          className="mt-1 p-2 w-full border rounded"
        />
        <div className="mt-2 text-right">
          <Link to="/forgot-password" className="text-orange-500">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-4 w-full h-12 bg-orange-500 text-white p-2 rounded-3xl"
        >
          Sign In
        </button>
        <p className="mt-4 text-center text-gray-700">
          ----- Or sign in with -----
        </p>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-2 w-full  p-2 rounded flex items-center justify-center"
        >
          <img src={googleLogo} alt="Google logo" className="w-10 h-10 mr-2" />
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
