import React from "react";
import { FirstDiseaseCart } from "./FirstDiseaseCart";

const SecondPart = () => {
  const myStyle = {
    color: "#7209b7",
  };
  const cartStyle = {
    borderRadius: "20px",
    border: "1px solid #7209b7"
  };
  const listStyle ={
    fontSize: "1.2rem"
}
  return (
    <>
      <div
        className="container-fluid my-3"
      >
        <div className="row justify-content-evenly p-5">
          <div className="col-md-4">
            <h3 style={{ color: "#7209b7" }}>Varities Skin Problems Cared By Us</h3>
          </div>
          <div className="col-md-5">
            <span>
              Meet with an urgent care doctor in minutes. Schedule a session
              with a therapist or psychiatrist this week.
            </span>
          </div>
        </div>
        <div className="container p-5">
          <div className="row ms-5">
            <FirstDiseaseCart myStyle={myStyle} cartStyle={cartStyle} listStyle={listStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPart;
