import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReminderPage from "./pages/ReminderPage";
import PropsPage from "./pages/PropsPage";
import StatePage from "./pages/StatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReminderPage />} />
        <Route path="props" element={<PropsPage />} />
        <Route path="state" element={<StatePage />} />
      </Routes>
    </>
  );
}

export default App;
