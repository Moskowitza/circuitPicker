import React from "react";
import PropTypes from "prop-types";
import base from "../../base";

class RunCircuit extends React.Component {
  static propTypes = {};
  //We need to get the circuit in here, maybe this componet has it's own state
  state = {
    ourCircuit: [],
    timer: 0
  };
  //we need to create a function that runs the circuit
  componentDidMount() {
    //1 Get our circuit name from the URL?
    const gymId = this.props.match.params.gymId;
    const circuitId = this.props.match.params.circuitId;
    const queryString = `/${gymId}/${circuitId}`;
    console.log(`${queryString}`);
    //Or can we get it from the App and pass it down?
    base.fetch(queryString, {
      context: this,
      then(data) {
        console.log(data);
        this.setState({ ourCircuit: data });
      }
    });
    // const ourCircuit = this.props.circuit;

    //2 set it to this component's state
  }
  //A button to start a timer
  timer() {
    console.log("timer started");
  }
  //remove climb after

  render() {
    return (
      <div className="top">
        <h2>RunCircuit</h2>
        <button onClick={this.timer}>Time Me</button>
      </div>
    );
  }
}

export default RunCircuit;
