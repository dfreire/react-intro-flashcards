export interface Deck {
  id: string;
  title: string;
}

export interface Card {
  id: string;
  deckId: string;
  question: string;
  answer: string;
  reviewDate: Date;
}
