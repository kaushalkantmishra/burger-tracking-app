import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/Button.png";

const SignUpPage = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { signupWithEmail, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupWithEmail(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      navigate("/post-login");
      // Clear input fields
      emailRef.current.value = "";
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } catch {
      setError("Failed to create an account");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await loginWithGoogle();
      navigate("/post-login");
      // Clear input fields
      emailRef.current.value = "";
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } catch {
      setError("Failed to sign up with Google");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-bold">Create your new account</h1>
        <p className="mt-2 text-gray-600">
          Create an account to start looking for food you like
        </p>
        {error && <p className="mt-2 text-red-600">{error}</p>}
        <label htmlFor="email" className="mt-4 block font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          ref={emailRef}
          required
          placeholder="Email Address"
          className="mt-4 p-2 w-full border rounded"
        />
        <label
          htmlFor="username"
          className="mt-4 block font-medium text-gray-700"
        >
          User Name
        </label>
        <input
          type="text"
          ref={usernameRef}
          required
          placeholder="User Name"
          className="mt-4 p-2 w-full border rounded"
        />
        <label
          htmlFor="password"
          className="mt-4 block font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="Password"
          className="mt-4 p-2 w-full border rounded"
        />
        <div className="mt-4 flex items-start">
          {" "}
          <input type="checkbox" className="mt-2 mr-2" />{" "}
          <p className="text-gray-700">
            I Agree with{" "}
            <a href="#" className="text-orange-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-orange-500">
              Privacy Policy
            </a>
          </p>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-4 w-full bg-orange-500 text-white p-2 rounded"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">Or sign up with</p>
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="mt-2 w-full  p-2 rounded flex items-center justify-center"
        >
          <img src={googleLogo} alt="Google logo" className="w-10 h-10 mr-2" />
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
