import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";
import Quote from "./pages/Quote";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navigation />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
