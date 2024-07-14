import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import successImage from "../assets/Success.png"; // Add your success image here
import backgroundImage from "../assets/image1.png"; // Add your background image here

const PostLoginPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      setError("Failed to logout. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-end min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="bg-white rounded-3xl shadow-lg p-6 max-w-sm w-full text-center lg:max-w-2xl"
        style={{ height: "60vh" }}
      >
        <img
          src={successImage}
          alt="Success"
          className="w-40 h-32 mx-auto mt-8"
        />
        <h1 className="text-2xl font-bold mt-10">Login Successful</h1>
        <button
          onClick={() => navigate("/tracking")}
          className="mt-4 w-full h-12 bg-orange-500 text-white p-2 rounded-3xl lg:max-w-md"
        >
          Go to Tracking Screen
        </button>
        <button
          onClick={handleLogout}
          className="mt-2 w-full text-gray-600 p-2"
        >
          Logout
        </button>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default PostLoginPage;
