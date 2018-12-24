import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GymPicker from "./GymPicker/GymPicker";
import SignUpForm from "./SignUpForm/SignUpForm";
import NotFound from "./NotFound/NotFound";
import App from "./App";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GymPicker} />
      <Route path="/gym/:gymId" component={App} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
