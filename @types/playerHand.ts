export interface Card {   
    code: string;
    image: string;
    images: Record<string, string>;
    value: string;
    suit: string;
    svg: string;

    
}

export type PlayerHandContextType = {
    user_id: string;
    pile_id: number;
    cards: Card[];
    hand: Card[];
    addCard: (card: Card) => void;
    returnToCard: (card: Card, pile_id: number) => void;

};

