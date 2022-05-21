export interface CardData {
  amount: string;
  id: string;
  name: string;
  history: CardDataHistory[];
}

export interface CardDataHistory {
  amount: string;
  comment: string;
  date: Date;
  isIncome: boolean;
}
