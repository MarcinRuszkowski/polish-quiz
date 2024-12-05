import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LvlPath } from "./components/LvlPath";
import { LevelPage } from "./components/LevelPage";
import { Navbar } from "./layouts/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LvlPath />} />
        <Route path="/level/:levelId" element={<LevelPage />} />
      </Routes>
    </Router>
  );
};

export default App;
