import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
        <Navigation />
      <CssBaseline />
      <Container maxWidth={false}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
