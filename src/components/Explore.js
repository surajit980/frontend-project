import React from "react";

const Explore = () => {
  return (
    <div className="explore">
      <h1 className="heading">Explore</h1>
      <p className="paragraph">
        From one-guest rooms to penthouses with pools and gardens
      </p>


      <div className="explore-details">

        <div className="explore-container e-c-1">
          <div className="explore-container-details">
            <p>Room with one king-size bed</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="btn">35$</p>
              <p className="btn">28м²</p>
              <button className="btn book-btn">Book!</button>
            </div>
          </div>
        </div>

        <div className="explore-container e-c-2">
          <div className="explore-container-details">
            <p>Penthouse for 8 person</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="btn">2039$</p>
              <p className="btn">438м²</p>
              <button className="btn book-btn">Book!</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Explore;
