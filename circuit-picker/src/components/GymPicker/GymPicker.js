import React from "react";
import { getFunName } from "../../helpers";
class GymPicker extends React.Component {
  render() {
    return (
      <>
        <form className="gym-selector">
          <h2>This is the Gym Picker Component</h2>
          <input
            type="text"
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
