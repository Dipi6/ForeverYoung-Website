import React from "react";
import homeImg from "../../Images/main.webp";

const FirstPart = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row justify-content-around">
          <div className="col-md-12">
            <img src={homeImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPart;
