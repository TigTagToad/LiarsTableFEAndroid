import { drawCard} from "../api";
import React, { useEffect } from "react";
import {useState} from "react"
import {Image, Button, View} from "react-native"
import { HandContext } from "../Contexts/PlayerHandContext";
import { useContext } from "react";
import { DisplayCards } from "./DisplayCards";

export const DrawButton: React.FC = () => {
    
    const { addCard } = useContext(HandContext);
  
    const handlePress =() => {


            drawCard(1).then((data)=>{
                addCard(data[0])
                
            })

    }

   
    return (
    <View>
        
        <Button title="draw 2 cards" onPress={handlePress}/>
        <DisplayCards/>

    </View>
)
        
  
   
}