import React from "react";
import Header from "./Header/Header";
import Boulders from "./Boulders/Boulders";
import Circuit from "./Circuit/Circuit";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Boulders />
        <Circuit />
      </>
    );
  }
}
export default App;
