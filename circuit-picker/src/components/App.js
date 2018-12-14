import React from "react";
import Boulders from "./Boulders/Boulders";
import Circuit from "./Circuit/Circuit";
import AddEdit from "./AddEdit/AddEdit";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Boulders />
        <Circuit />
        <AddEdit />
      </div>
    );
  }
}
export default App;
