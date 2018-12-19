import React from "react";
import Header from "../Header/Header";

class Circuit extends React.Component {
  renderCircuit = key => {
    const climb = this.props.climbs[key];
    const count = this.props.circuit[key];
    const isAvailable = climb && climb.status === "available";
    if (!climb) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {climb ? climb.color : "this climb"} is no longer set
        </li>
      );
    }
    return (
      <li key={key}>
        {count} {climb.color} {climb.grade}
        <button onClick={() => this.props.removeFromCircuit(key)}>-</button>
      </li>
    );
  };

  render() {
    const climbIds = this.props.circuit ? Object.keys(this.props.circuit) : 0;
    const total = climbIds.reduce((prevTotal, key) => {
      const climb = this.props.climbs[key];
      const count = this.props.circuit[key];
      const isAvailable = climb && climb.status === "available";
      if (isAvailable) {
        return prevTotal + count + climb.grade;
      }
      return total;
    }, 0);
    return (
      <div className="section">
        <Header tagline="circuit picker tool" />
        <h2>Circuit</h2>
        <ul>{climbIds.map(this.renderCircuit)}</ul>
        {/* <div className="climbName">{climbIds}</div> */}
        <div className="total">{total}</div>
      </div>
    );
  }
}
export default Circuit;
