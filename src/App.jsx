import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Demo from "./pages/demo";
import Footer from "./pages/Footer";
import Privacy from "./pages/Privacy";
import ChessGame from "./pages/ChessGame";
import Offline from "./pages/Offline";
import Leaderboard from "./pages/Leaderboard";
import Puzzles from "./pages/Puzzles";
import Learn from "./pages/Learn";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/game" element={<ChessGame />} />
        <Route path="/offline" element={<Offline/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/puzzles" element={<Puzzles/>} />
        <Route path="/learn" element={<Learn/>} />
      
      </Routes>
      <Routes>
        <Route path="/" element={<Levels />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
      
      
    </>
  );
};

export default App;

