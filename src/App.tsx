import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";
import Quote from "./pages/Quote";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
