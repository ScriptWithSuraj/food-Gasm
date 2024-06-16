import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food</h2>
        <p>
          Experience a culinary adventure like never before! Our innovative
          blend of food, fun, and convenience guarantees a memorable dining
          experience for all.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};
