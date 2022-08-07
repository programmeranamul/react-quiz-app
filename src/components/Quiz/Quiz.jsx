import React, { useState } from "react";
import MyModal from "./../MyModal";
import { IoClose } from "react-icons/io5";
import { data } from "./../../data/data";
import SingleQuiz from "./SingleQuiz";
import QuizPageHeader from "./QuizPageHeader";

function Quiz({ setFinished, finished, score, setScore }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handelCoorectAnsAndDtls = () => {
    console.log("object");
    openModal();
  };

  const [questions, setQuestions] = useState(data);
  const [quesIndex, setQuesIndex] = useState(0);
  const [lockedQues, setLockedAns] = useState([]);
  const [locked, setLocked] = useState("");
  const [end, setEnd] = useState(false);

  const handelNext = () => {
    setLocked("");
    let newIndex = quesIndex + 1;
    setQuesIndex(newIndex);
    if (locked === questions[quesIndex].correct_answer) {
      setScore(score + 1);
    }

    if (newIndex >= questions.length - 1) {
      setEnd(true);
    }
  };

  const checkAnswer = (answer) => {
    // if (lockedQues.includes(quesIndex)) return;
    setLocked(answer);
    // if (answer === questions[quesIndex].correct_answer) {
    //   setScore(score + 1);
    // }
    // setLockedAns([...lockedQues, quesIndex]);
  };

  const handelFinish = () => {
    setFinished(true);
  };

  return (
    <>
      <QuizPageHeader
        score={score}
        totalQus={questions.length}
        quesIndex={quesIndex}
      />
      <article className="quiz-section">
        <SingleQuiz
          checkAnswer={checkAnswer}
          questions={questions[quesIndex]}
          lockedQues={lockedQues}
          quesIndex={quesIndex}
          locked={locked}
        />
      </article>
      <article className="container">
       
        <div className="mb-4">
          {end ? (
            <button
              onClick={handelFinish}
              className={`${
                locked ? "" : "btn_disabled"
              } filled-btn d-block w-100 br-15`}
              disabled={locked ? false : true}
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handelNext}
              className={`${
                locked ? "" : "btn_disabled"
              } filled-btn d-block w-100 br-15`}
             disabled = {locked ? false: true}
            >
              Next
            </button>
          )}
        </div>

        <div className="pb-5">
          <button
            className={"outline-btn d-block w-100 br-15"}
            onClick={() => handelCoorectAnsAndDtls()}
          >
            Show right answer & Details
          </button>
        </div>
      </article>
      <MyModal showModal={showModal}>
        <div className="close" onClick={closeModal}>
          <IoClose className="cursor-pointer"/>
        </div>
        <h2 className="title-2">Right Answer & Details</h2>
        <div className="ans-box">
          <p className="r-ans">Right Answer</p>
          <p className="mb-0">
            <span className="title-3 color-2">{questions[quesIndex].correct_answer}</span>
          </p>
        </div>
        <p className="title-3 color-2">{questions[quesIndex].title}</p>
        <div>
          <div className="quiz-img">
            <img src={questions[quesIndex].img}  alt="" className="w-100" />
          </div>
        </div>
        <p className="fs-15 des ">
        {questions[quesIndex].description}
        </p>       
      </MyModal>
    </>
  );
}

export default Quiz;
