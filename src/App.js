import React from "react";
import "./App.css";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Development from "./pages/development/Development";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Practica from "./pages/practica/Practica";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/dev" element={<Development />} />
        <Route exact path="/practica" element={<Practica />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
