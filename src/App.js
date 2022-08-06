import "./styles/App.css";
import Welcome from "./Welcome";
import React from "react";
import QuizPage from "./page/QuizPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;
