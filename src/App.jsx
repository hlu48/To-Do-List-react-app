import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
