import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Promotions from "./pages/Promotions";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Book from "./pages/Book";
import FooterSection from "./components/FooterSection";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
      <FooterSection />
    </Router>
  );
};

export default App;
