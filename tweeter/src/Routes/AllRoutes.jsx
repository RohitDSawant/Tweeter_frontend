import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProtectedRoute from "../components/ProtectedRoute";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import UserProfile from "../components/userProfile";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
