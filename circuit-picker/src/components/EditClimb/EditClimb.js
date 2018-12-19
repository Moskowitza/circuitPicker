import React from "react";

class EditClimb extends React.Component {
  handleChange = event => {
    //update the climb
    //get copy of current climb
    const updatedClimb = {
      ...this.props.climb,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateClimb(this.props.index, updatedClimb);
  };
  render() {
    return (
      <div className="climb-edit">
        <input
          name="color"
          value={this.props.climb.color}
          type="text"
          placeholder="Color"
          onChange={this.handleChange}
        />
        <input
          name="image"
          value={this.props.climb.image}
          type="text"
          placeholder="Image"
          onChange={this.handleChange}
        />
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input
          name="grade"
          value={this.props.climb.grade}
          type="text"
          placeholder="Grade"
          onChange={this.handleChange}
        />
        <input
          name="wall"
          value={this.props.climb.wall}
          type="text"
          placeholder="Wall"
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.climb.status}
          onChange={this.handleChange}
        >
          <option value="set">Climb On</option>
          <option value="removed">Removed</option>
        </select>
      </div>
    );
  }
}
export default EditClimb;
