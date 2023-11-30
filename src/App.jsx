import "./App.css";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Development from "./pages/development/Development";
import Sims4 from "./pages/sims4/Sims4";
import Home from "./pages/home/Home";
import Information from "./pages/information/Information";
import LatestGame from "./pages/Latest-Game/LatestGame";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext";

function App() {
  return (
    <BrowserRouter>
    <LanguageProvider> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/dev" element={<Development />} />
        <Route exact path="/info" element={<Information />} />
        <Route exact path="/games" element={<LatestGame />} />
        <Route exact path="/sims4" element={<Sims4 />} />
      </Routes>
    </LanguageProvider>
  </BrowserRouter>
  );
}

export default App;
