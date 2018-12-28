import React from "react";
import PropTypes from "prop-types";
// import Header from "../Header/Header";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class Circuit extends React.Component {
  static propTypes = {
    climbs: PropTypes.object.isRequired,
    circuit: PropTypes.object.isRequired,
    saveCircuit: PropTypes.func.isRequired
  };
  renderCircuit = key => {
    const climb = this.props.climbs[key];
    const count = this.props.circuit[key];
    const isAvailable = climb && climb.status === "available";
    const transitionOptions = {
      classNames: "circuit",
      key,
      timeout: { enter: 250, exit: 250 }
    };
    if (!climb) return null;
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {climb ? climb.color : "this climb"} is no longer set
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          color: {climb.color} grade: {climb.grade} repeat {count}
          <button onClick={() => this.props.removeFromCircuit(key)}>
            remove
          </button>
        </li>
      </CSSTransition>
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
        {/* <Header tagline="circuit picker tool" /> */}
        <h2>Circuit</h2>

        <TransitionGroup component="ul" className="circuit">
          {climbIds.map(this.renderCircuit)}
        </TransitionGroup>
        <div className="total">{total}</div>
        <button onClick={this.props.saveCircuit}>Save</button>
      </div>
    );
  }
}
export default Circuit;
