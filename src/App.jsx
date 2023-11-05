import "./App.css";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Development from "./pages/development/Development";
import Home from "./pages/home/Home";
import LatestGame from "./pages/Latest-Game/LatestGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/dev" element={<Development />} />
        <Route exact path="/ea-originals" element={<Originals />} />
        <Route exact path="/games" element={<LatestGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
