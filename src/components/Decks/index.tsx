import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

import { getDecks } from "../../api";

const getDecksEffect = (setLoading, setDecks) => {
  setLoading(true);
  getDecks().then(({ decks }) => {
    setDecks(decks);
    setLoading(false);
  });
};

const Decks = () => {
  const [loading, setLoading] = useState(false);
  const [decks, setDecks] = useState([]);
  useEffect(() => getDecksEffect(setLoading, setDecks), []);

  return (
    <div>
      <h1>Decks</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {decks.map(deck => (
          <li key={deck.id}>
            <Link to={`/decks/${deck.id}`}>
              {deck.title} ({deck.id})
            </Link>
          </li>
        ))}
        <li>
          <Link to={`/decks/${uuid()}`}>Create new deck</Link>
        </li>
      </ul>
    </div>
  );
};

export default Decks;
