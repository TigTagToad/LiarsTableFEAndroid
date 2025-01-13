export interface Card {   
    code: string;
    image: string;
    images: {};
    value: string;
    suit: string;
    svg: string;

    
}

export type PlayerHandContextType = {
    user_id: string;
    pile_id: number;
    cards: [];
    hand: Card[];
    addCard: (card: []) => void;
    returnToCard: (card: Card, pile_id: number) => null;

};

