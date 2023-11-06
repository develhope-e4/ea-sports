import "./App.css";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Development from "./pages/development/Development";
import Sims4 from "./pages/sims4/Sims4";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/dev" element={<Development />} />
        <Route exact path="/sims4" element={<Sims4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
