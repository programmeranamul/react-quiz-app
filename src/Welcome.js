import React, { useState } from "react";
import img from "./images/home.png";
import MyModal from "./components/MyModal";

function Welcome() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section className="page-wrapper" onClick={() => console.log("OK")}>
        <article className="container">
          <h1 className="title-1">Quizterz</h1>
          <p className="title-2">
            Make Your Day <br />
            Fun Every Time
          </p>
          <p className="color-1">
            Let’z play the quiz everytime and everywhere
          </p>
          <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="mb-4">
            <button className="filled-btn d-block w-100" onClick={openModal}>
              Let's Get Started
            </button>
          </div>

          <div className="mb-5">
            <button className="outline-btn d-block w-100">About Quiz</button>
          </div>
        </article>
      </section>
      <MyModal showModal={showModal}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <button onClick={closeModal}>Off</button>
      </MyModal>
    </>
  );
}

export default Welcome;
