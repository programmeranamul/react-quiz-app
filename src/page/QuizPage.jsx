import React from "react";
import QuizPageHeader from "./../components/Quiz/QuizPageHeader";
import Quiz from "../components/Quiz/Quiz";
import "../styles/Quize.css";
import SubmitDetails from "../components/submitDetails/SubmitDetails";

function QuizPage() {
  return (
    <section className="page-wrapper">
      <QuizPageHeader />
      <Quiz />
    </section>
  );
}

export default QuizPage;
