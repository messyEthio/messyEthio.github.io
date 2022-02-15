import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div style={{ padding: 10 }}>
      <HomePage />
    </div>
  );
}
