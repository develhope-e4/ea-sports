import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Development from "./pages/development/Development";
import Home from "./pages/home/Home";
import LatestGame from "./pages/Latest-Game/LatestGame";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/dev" element={<Development />} />
                <Route exact path="/games" element={<LatestGame />} />
              </Routes>
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
