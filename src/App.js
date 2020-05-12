import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faUser);

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

function App() {
  const tokenFromCookie = Cookies.get("userToken");
  const [user, setUser] = useState(tokenFromCookie || null);
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer user={user} />
        </Route>
        <Route path="/log_in">
          <Login setUser={setUser} />
        </Route>
        <Route path="/sign_up">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish user={user} />
        </Route>
        <Route path="/payment">
          <Elements stripe={stripePromise}>
            <Payment user={user} />
          </Elements>
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
