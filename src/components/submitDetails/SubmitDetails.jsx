import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/InputField.css";
import { AiFillCaretDown } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { BsArrowLeftShort } from "react-icons/bs";
const SubmitDetails = ({setSubmited}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSubmited(true)
  };
  return (
    <div className="container">
      <section className="submit__details">
        <div>
          <div className="heading">
            <BsArrowLeftShort className="left__Arrow" />
            <p>Submit Details</p>
          </div>
          <p className="sub_heading">Please fill your details to submit quiz</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <input
              className="form__input"
              {...register("name", { required: true })}
            />
            <label className="form__label"> Enter Name </label>
            {errors.name && (
              <p className="mb-0 text-danger">This field is required</p>
            )}
          </div>

          <div className="form">
            <input
              className="form__input"
              {...register("phoneNumber", { required: true })}
            />
            <label className="form__label">Phone Number </label>
            {errors.phoneNumber && (
              <p className="mb-0 text-danger">This field is required</p>
            )}
          </div>
          <div className="form">
            <input
              className="form__input"
              {...register("email", { required: true })}
            />
            <label className="form__label">Email Address </label>
            {errors.email && (
              <p className="mb-0 text-danger">This field is required</p>
            )}
          </div>
          <div className="form">
            <input
              className="form__input"
              {...register("age", { required: true })}
            />
            <label className="form__label">Your Age </label>
            <AiFillCaretDown className="age_icon input_icon" />
            {errors.age && (
              <p className="mb-0 text-danger">This field is required</p>
            )}
          </div>
          <div className="form">
            <input
              className="form__input"
              {...register("city", { required: true })}
            />
            <label className="form__label">Your Age </label>
            <TiLocation className="city_icon input_icon" />
            {errors.city && (
              <p className="mb-0 text-danger">This field is required</p>
            )}
          </div>

          <div className="mt-4">
            <button type="submit" className={`filled-btn d-block w-100 br-15`}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SubmitDetails;

// import React from "react";
// import { useForm } from "react-hook-form";
// import InputField from "./InputField";
// import { AiFillCaretDown } from "react-icons/ai";
// import { TiLocation } from "react-icons/ti";
// import { BsArrowLeftShort } from "react-icons/bs";
// const SubmitDetails = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);
//   return (
//     <section className="submit-details">
//       <div className="container">
//         <h1 className="title-1 text-center mb-4">Submit Details</h1>
//         <h2 className="title-1 text-center mb-4 fw-500">Please fill your details to submit quiz</h2>
//       </div>
//     </section>
//   );
// };

// export default SubmitDetails;
