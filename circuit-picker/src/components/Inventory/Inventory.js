import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import Header from "../Header/Header";
import AddClimb from "../AddClimb/AddClimb";
import EditClimb from "../EditClimb/EditClimb";
import SignIn from "../SignIn/SignIn";
var firebaseui = require("firebaseui");

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
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHander({ user });
      }
    });
  }
  authHander = async authData => {
    //look up current store in database
    //claim it if there isn't one
    //Set the state of the inventory Component to that of current user
    console.log(authData);
  };

  singIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  signOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(function() {
        this.setState({ uid: null });
      })
      .catch(function(error) {
        // An error happened.
      });
  };
  start = () => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
      // Other config options...
    });
  };

  render() {
    const logout = <button onClick={this.signOut}>Sign Out</button>;

    // check if they are logged in
    if (!this.state.uid) {
      return <button onClick={this.start}>Register</button>;
    }
    //if logged in, check if they are the Gym Owner
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>You can't edit these routes</p>
          <button onClick={this.signOut}>Sign Out</button>
        </div>
      );
    }
    //otherwise, you're good.
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
        {logout}
      </div>
    );
  }
}
export default Inventory;
