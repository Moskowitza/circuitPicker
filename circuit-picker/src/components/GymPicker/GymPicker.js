import React from "react";

class GymPicker extends React.Component {
  render() {
    return (
      <>
        <form className="gym-selector">
          <h2>Enter a Gym Name</h2>
          <input type="text" required placeholder="gym name" />
          <button type="submit">visit gym</button>
        </form>
      </>
    );
  }
}
export default GymPicker;
