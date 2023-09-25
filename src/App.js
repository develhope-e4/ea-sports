import React from "react";
import "./App.css";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Development from "./pages/development/Development";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      {/* Aca va el elemento NAVBAR */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/dev" element={<Development />} />
      </Routes>
      {/* Aca va el elemento FOOTER */}
    </BrowserRouter>
  );
}

export default App;
