import * as React from "react";
import { Link } from "react-router-dom";

const Decks = () => (
  <div>
    <h1>Decks</h1>
    <ul>
      <li>
        <Link to={`/decks/${uuid()}`}>Create new deck</Link>
      </li>
    </ul>
  </div>
);

export default Decks;
