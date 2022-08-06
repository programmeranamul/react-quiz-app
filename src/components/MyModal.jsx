import "../styles/MyModal.css";
import ReactDOM from "react-dom";

function MyModal({ showModal, children }) {
  return ReactDOM.createPortal(
    <div className={`my-modal ${showModal ? "show-modal" : "hide-modal"}`}>
      <div className="container">
        <div className="modal-body-center">
          <div className="my-modal-body bg-1">{children}</div>
        </div>
      </div>
    </div>, document.getElementById('portal')
  );
}

export default MyModal;
