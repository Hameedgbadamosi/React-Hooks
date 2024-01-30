import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import "./index.css"; // Import your styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:rating" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
