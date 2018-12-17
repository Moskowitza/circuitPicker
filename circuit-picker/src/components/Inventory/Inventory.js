import React from "react";
import Header from "../Header/Header";
import AddEdit from "../AddEdit/AddEdit";
class Inventory extends React.Component {
  render() {
    return (
      <div className="section">
        <Header tagline="Add and Edit" />
        <h2>Inventory</h2>
        <AddEdit addClimb={this.props.addClimb} />
        <button onClick={this.props.loadSamples}>load Samples</button>
      </div>
    );
  }
}
export default Inventory;
