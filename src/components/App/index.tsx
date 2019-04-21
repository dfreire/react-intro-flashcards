import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Decks from "../Decks";
import Deck from "../Deck";
import Card from "../Card";

const App = () => (
  <BrowserRouter>
    <Link to="/">Home</Link>
    <Switch>
      <Route path="/decks" component={Decks} exact />
      <Route path="/decks/:id" component={Deck} exact />
      <Route path="/decks/:id/cards/:id" component={Card} exact />
      <Redirect from="/decks/:id/cards" to="/decks/:id" exact />
      <Redirect to="/decks" />
    </Switch>
  </BrowserRouter>
);

export default App;
