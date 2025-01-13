import { drawCard} from "../api";
import { DrawCard } from "./CardPile";
import React, { useEffect } from "react";
import {useState} from "react"
import {Image, Button, View} from "react-native"


export const DrawButton: React.FC = () => {
    
    const [cards, setCards] = useState <any[]>([])

  
    const handlePress =() => {


            drawCard(1).then((data)=>{
                console.log(data, "<---data")
                setCards([data[0],...cards])
            })

    }

    console.log(cards)
    return (
    <View>
        
        <Button title="draw 2 cards" onPress={handlePress}/>
        {cards.map((element, index) => (
        
        <Image 
            key={index}
            source={{ uri: element.image }}
            style={{ width: 200, height: 300 }} 
        />
    ))}
    </View>
)
        
  
   
}