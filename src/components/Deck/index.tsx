import * as React from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

interface Props {
  location: {
    pathname: string;
  };
}

const Deck = (props: Props) => (
  <div>
    <h1>Deck</h1>
    <ul>
      <li>
        <Link to={`${props.location.pathname}/cards/${uuid()}`}>
          Create new card
        </Link>
      </li>
    </ul>
  </div>
);

export default Deck;
