import axios from "axios";

const cardApi = axios.create({
    baseURL: "https://deckofcardsapi.com"
});
let deck_id = ""
export const getNewDeck = () => {
    return cardApi.get(`/api/deck/new`).then(({data})=>{
        deck_id = data.deck_id
        console.log(deck_id)
        return data;
        
    });
};

export const getBackOfCard = () => {
    return cardApi.get(`/static/img/back.png`).then(({data})=>{
        return data;
    })
}

export const drawCard = (count: number) => {
    return cardApi.get(`/api/deck/${deck_id}/draw/?count=${count}`).then(({data})=>{
        return data.cards
    })
}

export const addToPile = (deck_id: string, pile_name: string, cards: []) => {
    
    return cardApi.get(`api/deck/${deck_id}/pile/${pile_name}/add/?cards=${cards}`)
}