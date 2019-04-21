import uuid from "uuid/v4";
import lowdb from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

import { Card } from "../model";
import { Deck } from "../model";

const db = lowdb(new LocalStorage("db"));
db.defaults({ decks: [], cards: [] }).write();

const delay = <T>(result: T): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};

export const getDecks = (): Promise<{ ok: boolean; decks: Deck[] }> => {
  const decks: Deck[] = db.get("decks").value();
  return delay({ ok: true, decks });
};

export const putDeck = (
  newDeck: Deck
): Promise<{ ok: boolean; deckId: string }> => {
  newDeck.id = uuid();
  return db
    .get("decks")
    .push(newDeck)
    .write()
    .then(() => ({ ok: true, deckId: newDeck.id }));
};

export const postDeck = (
  updatedDeck: Deck
): Promise<{ ok: boolean; deckId: string }> =>
  db("decks")
    .find({ id: updatedDeck.id })
    .assign(updatedDeck)
    .write()
    .then(() => ({ ok: true, deckId: updatedDeck.id }));

export const deleteDeck = (
  deckId: string
): Promise<{ ok: boolean; deckId: string }> =>
  Promise.all([
    db
      .get("decks")
      .remove({ id: deckId })
      .write(),
    db
      .get("cards")
      .remove({ deckId })
      .write()
  ]).then(() => ({ ok: true, deckId }));

export const getCards = (
  deckId: string
): Promise<{ ok: boolean; cards: Card[] }> => {
  const cards: Card[] = db
    .get("cards")
    .find({ deckId })
    .value();
  return delay({ ok: true, cards });
};

export const putCard = (
  newCard: Card
): Promise<{ ok: boolean; cardId: string }> => {
  newCard.id = uuid();
  return db
    .get("cards")
    .push(newCard)
    .write()
    .then(() => ({ ok: true, cardId: newCard.id }));
};

export const postCard = (
  updatedCard: Card
): Promise<{ ok: boolean; cardId: string }> =>
  db("cards")
    .find({ id: updatedCard.id })
    .assign(updatedCard)
    .write()
    .then(() => ({ ok: true, cardId: updatedCard.id }));

export const deleteCard = (
  cardId: string
): Promise<{ ok: boolean; cardId: string }> =>
  db
    .get("cards")
    .remove({ id: cardId })
    .write()
    .then(() => ({ ok: true, cardId }));
