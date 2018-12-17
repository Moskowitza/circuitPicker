import React from "react";
import Header from "../Header/Header";
// import Boulder from "../Boulder/Boulder";

class Boulders extends React.Component {
  render() {
    return (
      <div className="section">
        <Header tagline="pick your climbs" />
        <h2>Boulders</h2>
        <ul>
          {this.props.climbs
            ? Object.keys(this.props.climbs).map(key => <p>{key}</p>)
            : ""}
          {/* <Boulder /> */}
        </ul>
      </div>
    );
  }
}
export default Boulders;
