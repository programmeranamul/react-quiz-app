import React, { useState } from "react";
import img from "../../images/image 6.png";
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

    if (newIndex >= questions.length - 1) {
      setEnd(true);
    }
  };

  const checkAnswer = (answer) => {
    if (lockedQues.includes(quesIndex)) return;
    setLocked(answer);
    if (answer === questions[quesIndex].correct_answer) {
      setScore(score + 1);
    }
    setLockedAns([...lockedQues, quesIndex]);
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
          <button
            className={"outline-btn d-block w-100 br-15"}
            onClick={() => handelCoorectAnsAndDtls()}
          >
            Show right answer & Details
          </button>
        </div>
        <div className="mb-5">
          {end ? (
            <button
              onClick={handelFinish}
              className={`${
                lockedQues.includes(quesIndex) ? "" : "btn_disabled"
              } filled-btn d-block w-100 br-15`}
              disabled={lockedQues.includes(quesIndex) ? false : true}
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handelNext}
              className={`${
                lockedQues.includes(quesIndex) ? "" : "btn_disabled"
              } filled-btn d-block w-100 br-15`}
              disabled={lockedQues.includes(quesIndex) ? false : true}
            >
              Next
            </button>
          )}
        </div>
      </article>
      <MyModal showModal={showModal}>
        <div className="close" onClick={closeModal}>
          <IoClose />
        </div>
        <h2 className="title-2">Right Answer & Details</h2>
        <div className="ans-box">
          <p className="r-ans">Right Answer</p>
          <p className="mb-0">
            <span className="title-3 color-2">Thomas Alva Edison</span>
          </p>
        </div>
        <p className="title-3 color-2">Thomas Alva Edison history</p>
        <div>
          <div className="quiz-img">
            <img src={img} alt="" className="w-100" />
          </div>
        </div>
        <p className="fs-15 des ">
          Thomas Edison began his career selling candy, newspapers and
          vegetables on the trains running from Port Huron to Detroit. He turned
          a $50-a-week profit by age 13, most of which went to buying equipment
          for electrical and chemical experiments.[21] He became a telegraph
          operator after he saved 3-year-old Jimmie MacKenzie from being struck
          by a runaway train. Jimmie's father, station agent J. U. MacKenzie of
          Mount Clemens, Michigan, was so grateful that he
        </p>
        <button onClick={closeModal}>Close</button>
      </MyModal>
    </>
  );
}

export default Quiz;
