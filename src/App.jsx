import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Development from "./pages/development/Development";
import Home from "./pages/home/Home";
import LatestGame from "./pages/Latest-Game/LatestGame";
import Login from "./pages/Login/Login";
import CreateAccountForm from "./components/CreateAccountForm/CreateAccountForm";

function App() {

 
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/dev" element={<Development />} />
                <Route exact path="/games" element={<LatestGame />} />
              </Routes>
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
