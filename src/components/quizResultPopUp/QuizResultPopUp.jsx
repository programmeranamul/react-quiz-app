import CongratsImage from "../../images/congratulation-logo.png";
import ClockImage from "../../images/clock.png";
import ResultSectionBtn from "./ResultSectionBtn";
import "../../styles/quizResultPopUp.css";
import { useNavigate } from "react-router-dom";

const QuizResultPopUp = ({ score }) => {
  let navigate = useNavigate();

  const handelTryAgain = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="quizResultPopUp">
        {/* PopUp Header */}
        <div className="popUp__header"></div>
        {/* main content */}
        <div className="popUp__content">
          <div className="congrats__section">
            <div className="congrats__img">
              <img src={CongratsImage} alt="congratulation-logo" />
            </div>
            <div className="congrats__massage">
              <span>Congratulation!!!</span>
              <span>You get {score} quiz point</span>
            </div>
          </div>
          <div className="quiz__time">
            <div className="time__icon">
              <img src={ClockImage} alt="clock icon" />
              <p>Time Taken</p>
            </div>
            <div className="total__time">
              <span>
                2 <span className="time__text">Min.</span>
              </span>
            </div>
          </div>
          <div className="get__more-points w-100">
            <ResultSectionBtn
              className="more__points-btn w-100"
              text="Share quiz to get more points"
            />
          </div>
        </div>
        {/* share & try button */}
        <div className="mb-3 w-100 px-4 mt-4">
          <button className="filled-btn d-block w-100">Share it</button>
        </div>
        <div className="mb-5 pb-5 w-100 px-4">
          <button
            onClick={handelTryAgain}
            className="outline-btn d-block w-100"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResultPopUp;
