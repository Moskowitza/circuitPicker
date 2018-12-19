import React from "react";
import Header from "../Header/Header";
import AddClimb from "../AddClimb/AddClimb";
import EditClimb from "../EditClimb/EditClimb";
class Inventory extends React.Component {
  render() {
    return (
      <div className="section">
        <Header tagline="Add and Edit" />
        <h2>Inventory</h2>

        {Object.keys(this.props.climbs).map(key => (
          <EditClimb
            deleteClimb={this.props.deleteClimb}
            key={key}
            index={key}
            climb={this.props.climbs[key]}
            updateClimb={this.props.updateClimb}
          />
        ))}
        <AddClimb addClimb={this.props.addClimb} />
        <button onClick={this.props.loadSamples}>load Samples</button>
      </div>
    );
  }
}
export default Inventory;
