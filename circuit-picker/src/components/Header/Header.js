import React from "react";

const Header = props => (
  <div className="top">
    <h2>Circuit Picker</h2>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </div>
);

export default Header;
