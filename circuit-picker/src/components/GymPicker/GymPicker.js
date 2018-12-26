import React from "react";
import { getFunName } from "../../helpers";
import base, { firebaseApp } from "../../base";
import firebase from "firebase";

class GymPicker extends React.Component {
  myInput = React.createRef();
  state = {
    gyms: null
  };
  getGyms() {
    base.fetch("/", {
      context: this,
      asArray: true,
      then(data) {
        const gyms = [];
        data.forEach(gym => {
          gyms.push(gym.key);
        });
        this.setState({ gyms });
      }
    });
  }
  componentDidMount() {
    this.getGyms();
  }
  goToGym = e => {
    //prevent form from submitting
    e.preventDefault();
    // get input text
    // const gymName = this.myInput.value.value;
    const gymName = this.myInput.current.value;
    // change page to the gym name
    this.props.history.push(`/gym/${gymName}`);
  };
  // componentDidMount = () => console.log("mounted");
  render() {
    return (
      <>
        <form className="gym-selector" onSubmit={this.goToGym}>
          <h2>This is the Gym Picker Component</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Gym Name"
            defaultValue={getFunName()}
          />
          <button type="submit">visit gym</button>
        </form>
      </>
    );
  }
}
export default GymPicker;
