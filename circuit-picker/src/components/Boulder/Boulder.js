import React from "react";
class Boulder extends React.Component {
  handleClick = () => {
    this.props.addToCircuit(this.props.index);
  };
  render() {
    const { image, color, desc, grade, wall, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="single-climb">
        <img className="thumbnail" src={image} alt={color} />
        <h3>{color}</h3>
        <h4>{grade} </h4>
        <p>{desc}</p>
        <p>{wall}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add to Circuit" : "Sorry"}
        </button>
      </li>
    );
  }
}

export default Boulder;
