import React from "react";
// import PropTypes from "prop-types";
import base from "../../base";

class RunCircuit extends React.Component {
  //   static propTypes = {};
  //We need to get the circuit in here, maybe this componet has it's own state
  state = {
    ourCircuit: {},
    timer: 0
  };
  //we need to create a function that runs the circuit
  componentDidMount() {
    //1 Get our circuit name from the URL?
    const gymId = this.props.match.params.gymId;
    const circuitId = this.props.match.params.circuitId;
    const queryString = `/${gymId}/${circuitId}`;
    //Or can we get it from the App and pass it down?
    base.fetch(queryString, {
      context: this,
      //   asArray: true,
      then(data) {
        console.log(data);
        this.setState({ ourCircuit: data });
      }
    });
  }

  //A button to start a timer
  timer() {
    console.log("timer started");
  }
  //remove climb after
  output = repeater => {
    let reps = repeater;
    console.log(`reps ${reps}`);
    return function(key) {
      let i = 0;
      let result = [];
      while (i < reps) {
        i++;
        console.log(i, key);
        console.log(`are we looping ${key} this ${i} many times ${reps}`);
        result.push(<div key={key + i}>{key}</div>);
      }
      return result;
    };
  };
  render() {
    return (
      <div className="top">
        <h2>RunCircuit</h2>
        <div>
          {Object.keys(this.state.ourCircuit).map(key => {
            const repeater = parseInt(this.state.ourCircuit[key]);
            const repeatThis = this.output(repeater);
            return repeatThis(key);
          })}
        </div>
        <button onClick={this.timer}>Time Me</button>
      </div>
    );
  }
}

export default RunCircuit;
