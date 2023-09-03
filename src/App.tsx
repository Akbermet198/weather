import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { MonthStatic } from "./pages/monthStatics/MonthStatics";
import { Header } from "./shared/Header";
import { PopUp } from "./shared/popup/PopUp";

function App() {
  return (
    <div className="contayner">
      <PopUp />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="MonthStatic" element={<MonthStatic />} />
      </Routes>
    </div>
  );
}

export default App;
