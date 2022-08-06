import React from "react";
import img from "../../images/image 6.png";

function SingleQuiz({ questions, checkAnswer, lockedQues, quesIndex, locked }) {
  const { correct_answer, question, options } = questions;
  // const suffledOption = options.sort(() => Math.random() - 0.5);
  const suffledOption = options;
  return (
    <>
      <div className="container">
        <div className="quiz-img">
          <img src={img} alt="" className="w-100" />
        </div>
        <h2 className="title-3 color-2 text-center question">{question}</h2>
        <div>
          <div className="option-wrapper">
            {suffledOption.map((op) => (
              <button
                key={op}
                onClick={() => checkAnswer(op)}
                // className={`selected-btn ${
                //   lockedQues.includes(quesIndex) && correct_answer === op
                //     ? "correct-ans"
                //     : "wrong-ans"
                // }`}
                className={`selected-btn ${
                  locked === op && correct_answer === op ? "correct-ans" : "wrong-ans"
                }`}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleQuiz;
