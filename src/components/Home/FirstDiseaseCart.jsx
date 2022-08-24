import React from "react";

export const FirstDiseaseCart = ({myStyle, cartStyle, listStyle}) => {
  return (
    <>

      <div className="col-md-4 my-2">
        <div className="card p-3 shadow-lg" style={cartStyle}>
          <h3 style={myStyle}>Skin conditions</h3>
          <ul style={listStyle}>
            <li>Acne</li>
            <li>Cellulitis</li>
            <li>Rashes</li>
            <li>Sunburn</li>
          </ul>
        </div>
      </div>

      <div className="col-md-4 my-2">
        <div className="card p-3 shadow-lg" style={cartStyle}>
          <h3 style={myStyle}>Allergies</h3>
          <ul style={listStyle}>
            <li> Seasonal allergies</li>
            <li> Epipen refills</li>
            <li> Allergic sinusitis</li>
            <li> Hives</li>
          </ul>
        </div>
      </div>

      <div className="col-md-4 my-2">
        <div className="card p-3 shadow-lg" style={cartStyle}>
          <h3 style={myStyle}>Everyday Care</h3>
          <ul style={listStyle}>
            <li> Seasonal allergies</li>
            <li> Skin Rashes</li>
            <li> Acne</li>
            <li> Pimples</li>
          </ul>
        </div>
      </div>


    </>
  );
};
