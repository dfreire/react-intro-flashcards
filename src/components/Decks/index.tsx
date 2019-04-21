import * as React from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

import { getDecks } from "../../api";

const Decks = () => (
  <div>
    {console.log("getDecks", getDecks())}
    <h1>Decks</h1>
    <ul>
      <li>
        <Link to={`/decks/${uuid()}`}>Create new deck</Link>
      </li>
    </ul>
  </div>
);

export default Decks;
