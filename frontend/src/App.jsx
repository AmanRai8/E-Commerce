import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import DrawingApp from "./personalComponents/DrawingApp";
import ParticleTrail from "./personalComponents/ParticleTrail";
import ConstellationEffect from "./personalComponents/ConstellationEffect";
import SparkleCursor from "./personalComponents/SparkleCursor";
import ParticlesBackground from "./personalComponents/ParticlesBackground";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>
      {/* <DrawingApp /> */}
      {/* <ParticleTrail /> */}
      {/* <ConstellationEffect /> */}
      {/* <SparkleCursor /> */}
      {/* <ParticlesBackground /> */}
      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
