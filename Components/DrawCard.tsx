import { drawCard} from "../api";
import { DrawCard } from "./CardPile";
import React, { useEffect } from "react";
import {useState} from "react"
import {Button, View} from "react-native"


export const DrawButton: React.FC = () => {
    const [draw, setDraw] = useState <boolean>(false)

  
    const handlePress =() => {

        setDraw(true)

       

    }

        
    return (
    <View>
        
        <Button title="draw 2 cards" onPress={handlePress}/>
        <DrawCard draw={draw}/>
    </View>
)
        
  
   
}