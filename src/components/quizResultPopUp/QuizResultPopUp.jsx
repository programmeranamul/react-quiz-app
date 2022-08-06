import CongratsImage from "../../images/congratulation-logo.png";
import ClockImage from "../../images/clock.png";
import ResultSectionBtn from "./ResultSectionBtn";
import "../../styles/quizResultPopUp.css";
const QuizResultPopUp = () => {
  return (
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
            <span>You get 60 quiz point</span>
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
        <div className="get__more-points">
          <ResultSectionBtn
            className="more__points-btn"
            text="Share quiz to get more points"
          />
        </div>
      </div>
      {/* share & try button */}
      <div className="share__button-section">
        <ResultSectionBtn className="share__it" text="Share it" />
        <ResultSectionBtn className="try__again" text="Try Again" />
      </div>
    </div>
  );
};

export default QuizResultPopUp;
