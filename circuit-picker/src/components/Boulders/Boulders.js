import React from "react";
import Header from "../Header/Header";
import Boulder from "../Boulder/Boulder";
// import Boulder from "../Boulder/Boulder";

class Boulders extends React.Component {
  render() {
    return (
      <div className="section">
        <Header tagline="pick your climbs" />
        <h2>Boulders</h2>
        <ul>
          {this.props.climbs
            ? Object.keys(this.props.climbs).map(key => (
                <Boulder
                  key={key}
                  index={key}
                  details={this.props.climbs[key]}
                  addToCircuit={this.props.addToCircuit}
                />
              ))
            : ""}
          {/* <Boulder /> */}
        </ul>
      </div>
    );
  }
}
export default Boulders;
