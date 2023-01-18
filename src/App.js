import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Showcase from "./components/Showcase";
import background from "./imgs/background.png";
import { Routes, Route } from "react-router-dom";
import ZipCode from "./components/ZipCode";
import SingleRestaurant from "./components/SingleRestaurant";

function App() {
  let subdomain;
  const host = window.location.host,
    hostArr = host.split(".").slice(0, host.includes("restobau") ? -1 : -2);
  if (hostArr.length > 0) {
    subdomain = hostArr[0];
    console.log(subdomain);
    return (
      <div
        style={{
          background: `url(${background}) no-repeat center center/cover`,
        }}
      >
        <header className="header">
          <Logo />
        </header>
        <Routes>
          <Route path="/" element={<SingleRestaurant />} />
        </Routes>
      </div>
    );
  }
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
        <Route
          path="/restaurant/:zipcode/:i/:retaurantname"
          element={<SingleRestaurant />}
        />
      </Routes>
    </div>
  );
}

export default App;
