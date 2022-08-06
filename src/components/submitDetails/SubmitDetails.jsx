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
//    <div className="container">
//      <section className="submit__details">
//       <div>
//         <div className="heading">
//           <BsArrowLeftShort className="left__Arrow" />
//           <p>Submit Details</p>
//         </div>
//         <p className="sub_heading">Please fill your details to submit quiz</p>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <InputField {...register("Enter Name")} text="Enter Name" type="text" />
//         <InputField
//           {...register("Phone Number")}
//           text="Phone Number"
//           type="number"
//         />
//         <InputField
//           {...register("Email Address")}
//           text="Email Address"
//           type="email"
//         />
//         <InputField
//           {...register("Your Age")}
//           text="Your Age"
//           type="number"
//           AiFillCaretDown={AiFillCaretDown}
//         />
//         <InputField
//           {...register("city")}
//           text="City"
//           type="text"
//           TiLocation={TiLocation}
//         />
//         <input className="submit__button" type="submit" />
//       </form>
//     </section>
//    </div>
//   );
// };

// export default SubmitDetails;


import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { AiFillCaretDown } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { BsArrowLeftShort } from "react-icons/bs";
const SubmitDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
        <InputField {...register("Enter Name")} text="Enter Name" type="text" />
        <InputField
          {...register("Phone Number")}
          text="Phone Number"
          type="number"
        />
        <InputField
          {...register("Email Address")}
          text="Email Address"
          type="email"
        />
        <InputField
          {...register("Your Age")}
          text="Your Age"
          type="number"
          AiFillCaretDown={AiFillCaretDown}
        />
        <InputField
          {...register("city")}
          text="City"
          type="text"
          TiLocation={TiLocation}
        />
        <input className="submit__button" type="submit" />
      </form>
    </section>
   </div>
  );
};

export default SubmitDetails;