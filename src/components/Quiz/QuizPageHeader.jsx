import React from "react";

function QuizPageHeader({score, quesIndex, totalQus}) {
  return (
    <div className="container">
      <h1 className="title-1 text-center mb-4">Lavel’s Quiz</h1>
      <div className="scoar-board bg-2">
        <h3 className="title-3 color-2 text-center">Scor {score}</h3>
        <p className="fs-15 color-2 text-center">Question {quesIndex + 1}/{totalQus}</p>
        <div className="my-progress-bar">
          <div className="progess-info"></div>
        </div>
      </div>
    </div>
  );
}

export default QuizPageHeader;
