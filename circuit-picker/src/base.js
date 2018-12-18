import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-1yiBUkmwTe1OrNcZkwq3nMWOX0NxKnU",
  authDomain: "circuitpicker.firebaseapp.com",
  databaseURL: "https://circuitpicker.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
