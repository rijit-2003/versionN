import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Hobbies from "./components/Hobbies";
import Background from "./components/Background";

function App() {
  return (
    <Router>
      <Background/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
