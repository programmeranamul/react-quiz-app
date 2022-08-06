import "../../styles/InputField.css";

const InputField = ({ text, type, AiFillCaretDown, TiLocation }) => {
  return (
    <>
      <div className="form">
        <input
          type={type}
          id=""
          className="form__input"
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor={type} className="form__label">
          {text}
        </label>
        {text === "Your Age" && (
          <AiFillCaretDown
            style={{ fontSize: "30px", float: "right", margin: "10px" }}
          />
        )}
        {text === "City" && (
          <TiLocation
            style={{ fontSize: "30px", float: "right", margin: "9px" }}
          />
        )}
      </div>
    </>
  );
};

export default InputField;
