import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Showcase from "./components/Showcase";
import background from "./imgs/background.webp";
import { Routes, Route } from "react-router-dom";
import ZipCode from "./components/ZipCode";

function App() {
  return (
    <div
      style={{ background: `url(${background}) no-repeat center center/cover` }}
    >
      <header className="header">
        <Logo />
      </header>
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/restaurants/:zipcode" element={<ZipCode />} />
      </Routes>
    </div>
  );
}

export default App;
