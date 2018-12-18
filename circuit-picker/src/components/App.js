import React from "react";
import Boulders from "./Boulders/Boulders";
import Circuit from "./Circuit/Circuit";
import Inventory from "./Inventory/Inventory";
import sampleClimbs from "../sampleClimbs";
import base from "../base";
class App extends React.Component {
  state = {
    climbs: {},
    circuit: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.gymId}/climbs`, {
      context: this,
      state: "climbs"
    });
  }
  componentWillUnmount() {
    console.log("unmounting");
    base.removeBinding(this.ref);
  }
  addClimb = climb => {
    console.log(`Adding${climb}`);
    //take copy of current state
    const climbs = { ...this.state.climbs };
    //name our new climb by the date, add it to the array of climbs we spread in above.
    climbs[`climb${Date.now()}`] = climb;
    this.setState({
      climbs
    });
  };
  loadSamples = samples => {
    this.setState({ climbs: sampleClimbs });
  };
  addToCircuit = key => {
    //copy state
    const circuit = { ...this.state.circuit };
    //add or update circuit
    circuit[key] = circuit[key] + 1 || 1;
    //call setState
    this.setState({
      circuit
    });
  };
  render() {
    return (
      <div className="container">
        <Boulders climbs={this.state.climbs} addToCircuit={this.addToCircuit} />
        <Circuit circuit={this.state.circuit} climbs={this.state.climbs} />
        <Inventory addClimb={this.addClimb} loadSamples={this.loadSamples} />
      </div>
    );
  }
}
export default App;
