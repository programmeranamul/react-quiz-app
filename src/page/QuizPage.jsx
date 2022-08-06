import React, { useState } from "react";
import QuizPageHeader from "./../components/Quiz/QuizPageHeader";
import Quiz from "../components/Quiz/Quiz";
import "../styles/Quize.css";
import SubmitDetails from "../components/submitDetails/SubmitDetails";
import QuizResultPopUp from "../components/quizResultPopUp/QuizResultPopUp";

function QuizPage() {
  const [finished, setFinished] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <section className="page-wrapper">
      {!finished && !submited ? (
        <Quiz
          finished={finished}
          setFinished={setFinished}
          setScore={setScore}
          score={score}
        />
      ) : finished && !submited ? (
        <SubmitDetails setSubmited={setSubmited} />
      ) : (
        <QuizResultPopUp
          setFinished={setFinished}
          setSubmited={setSubmited}
          score={score}
        />
      )}
      {/* <QuizResultPopUp /> */}
    </section>
  );
}

export default QuizPage;
