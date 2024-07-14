import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "../firebase";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await sendPasswordResetEmail(emailRef.current.value);
      setMessage("Check your email for instructions to reset your password.");
    } catch (err) {
      setError("Failed to send reset email. Please check your email address.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-bold">Forgot Password</h1>
        <p className="mt-2 text-gray-600">
          Enter your email address to receive a password reset link.
        </p>
        {error && <p className="mt-2 text-red-600">{error}</p>}
        {message && <p className="mt-2 text-green-600">{message}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
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
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-12 bg-orange-500 text-white p-2 rounded-3xl"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-center">
          Remember your password?{" "}
          <button
            className="text-orange-500"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
