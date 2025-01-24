import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentsPage from "./pages/StudentsPage";
import CollegeStudents from "./pages/College-Students";
import Gate from "./pages/Gate";
import Manga from "./pages/Manga";
import Comic from "./pages/Comics";
import Novel from "./pages/Novels";
import Lstyle from "./pages/Lifestyle";
import Astronomy from "./pages/Astronomy";
import PHY from "./pages/Science";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <NavbarComponent />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/college-students" element={<CollegeStudents />} />
            <Route path="/gate" element={<Gate/>} />     
            <Route path="/comics" element={<Comic/>} />    
            <Route path="/manga" element={<Manga/>} />
            <Route path="/novels" element={<Novel/>} />
            <Route path="/lifestyle" element={<Lstyle/>} />
            <Route path="/astronomy" element={<Astronomy/>} />
            <Route path="/physics" element={<PHY/>} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer-dark">
          <small>© 2024 Classic Pages Library. All rights reserved.</small>
        </footer>
      </div>
    </Router>
  );
};

export default App;
