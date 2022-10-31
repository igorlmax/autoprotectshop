import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";
import Quote from "./pages/Quote";

function App() {
  return (
    <>
      <Navigation />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
