import React from "react";
class Boulder extends React.Component {
  render() {
    const { image, color, desc, grade, wall, status } = this.props.details;
    return (
      <li className="single-climb">
        <img className="thumbnail" src={image} alt={color} />
        <h3>{color}</h3>
        <h4>{grade} </h4>
        <p>{desc}</p>
        <p>{wall}</p>
        <button>Add to Circuit</button>
      </li>
    );
  }
}

export default Boulder;
