import React, { useState } from "react";
import QuizPageHeader from "./../components/Quiz/QuizPageHeader";
import Quiz from "../components/Quiz/Quiz";
import "../styles/Quize.css";
import SubmitDetails from "../components/submitDetails/SubmitDetails";
import QuizResultPopUp from "../components/quizResultPopUp/QuizResultPopUp";

function QuizPage() {
  const [finished, setFinished] = useState(false);
  return (
    <section className="page-wrapper">
      {finished ? (
        <SubmitDetails />
      ) : (
        <Quiz finished={finished} setFinished={setFinished} />
      )}
      {/* <QuizResultPopUp /> */}
    </section>
  );
}

export default QuizPage;
