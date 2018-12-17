import React from "react";
import Boulders from "./Boulders/Boulders";
import Circuit from "./Circuit/Circuit";
import Inventory from "./Inventory/Inventory";
class App extends React.Component {
  state = {
    climbs: {},
    circuit: {}
  };
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
  render() {
    return (
      <div className="container">
        <Boulders />
        <Circuit />
        <Inventory addClimb={this.addClimb} />
      </div>
    );
  }
}
export default App;
