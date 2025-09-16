// src/components/Content.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";

const Content = () => {
  return (
    <div className="p-3 flex-grow-1">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        {/* Redirect default path / to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Content;
