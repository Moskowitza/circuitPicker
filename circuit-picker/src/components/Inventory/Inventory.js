import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import base, { firebaseApp } from "../../base";
import Header from "../Header/Header";
import AddClimb from "../AddClimb/AddClimb";
import EditClimb from "../EditClimb/EditClimb";
import Login from "../Login/Login";

class Inventory extends React.Component {
  static propTypes = {
    climbs: PropTypes.object.isRequired,
    addClimb: PropTypes.func.isRequired,
    deleteClimb: PropTypes.func.isRequired,
    loadSamples: PropTypes.func.isRequired
  };
  state = {
    uid: null,
    owner: null
  };
  authHandler = async authData => {
    //1 Look up current Gym in Database
    const gym = await base.fetch(this.props.gymId, { context: this });
    console.log(gym); //this returns the climbs for the gym
    //2 If there is no Onwer, it is up for grabs?
    if (!gym.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3 Set the state of inventory component to reflect current user,
    //they have access to the gym's routes
    console.log(authData);
  };
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.authHander({ user });
  //     }
  //   });
  // }
  render() {
    //otherwise, you're good.
    return <Login authenticate={this.authenticate} />;
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
