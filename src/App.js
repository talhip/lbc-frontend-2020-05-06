import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

function App() {
  const tokenFromCookie = Cookies.get("userToken");
  const [user, setUser] = useState(tokenFromCookie || null);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/log_in">
          <Login setUser={setUser} />
        </Route>
        <Route path="/sign_up">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
