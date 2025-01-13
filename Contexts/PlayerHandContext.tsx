import { createContext, useState } from "react";
import * as React from 'react'
import { PlayerHandContextType, Card} from "../@types/playerHand";


export const HandContext = React.createContext<PlayerHandContextType | null>(null);



export const HandProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    
    const [hand, setHand] = React.useState<Card[]>([])
    const addCard = (card: Card) => {
        setHand([...hand, card])
    }
    const value = {
        hand,
        addCard
    }
    return <HandContext.Provider value={value}>{children}</HandContext.Provider>
}