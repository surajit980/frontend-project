import React from "react";

const Header = () => {
  return (
    // full header div
    <div className="header">

      {/* navbar div */}
      <div className="navbar">
        <h1 className="logo">Your Logo</h1>
        <ul className="nav-lists">
          <li>Explore</li>
          <li>About Us</li>
          <li>
            Cities<i class="fa-sharp fa-solid fa-angle-down"></i>
          </li>
          <li style={{ border: "1px solid white", borderRadius: "7px" }}>
            Call
          </li>
        </ul>
        <i class="fa-solid fa-bars fa-2xl"></i>
      </div>

      {/* header details div */}
      <div className="header-details">
        <h1 className="header-heading">Rethink your living & renting</h1>
      </div>
      <p className="header-paragraph">Make your stay painless with us</p>

      {/* header search div */}
      <div className="header-search-container">
        <div className="inp">
          <label htmlFor="city">CITY</label>
          <input name="city" type={"text"} placeholder="Select your city" />
        </div>
        <div className="inp">
          <label htmlFor="dates">DATES</label>
          <input name="dates" type={"text"} placeholder="Select your dates" />
        </div>
        <div className="inp">
          <label htmlFor="guests">GUESTS</label>
          <input name="guests" type={"text"} placeholder="Add guests" />
        </div>
        <div
          className="inp"
          style={{
            background: "linear-gradient(90deg, #ff594c 0%, #fac527 100%)",
          }}
        >
          <button className="search-inp">
            <i class="fa-solid fa-magnifying-glass"></i> Search
          </button>
        </div>
      </div>

      {/* header down arrow div */}
      <div className="arrow-down"
        style={{
          width: "98%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "60px",
        }}
      >
        <i
          class="fa-sharp fa-solid fa-angle-down fa-2xl"
          style={{ color: "white" }}
        ></i>
      </div>

    </div>
  );
};

export default Header;
