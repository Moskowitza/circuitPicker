import React from "react";
import PropTypes from "prop-types";

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
    //Or can we get it from the App and pass it down?
    const ourCircuit = this.props.circuit;
    //2 set it to this component's state
    this.setState({
      ourCiruit: ourCircuit
    });
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
