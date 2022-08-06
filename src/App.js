import "./styles/App.css";
import Welcome from "./Welcome";
import React, { useState } from "react";
import QuizPage from "./page/QuizPage";
import SubmitDetails from "./components/submitDetails/SubmitDetails";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>   
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="quiz" element={<QuizPage />  } />
      </Routes>   
        
    </>
  );
}

export default App;
